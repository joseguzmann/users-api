const userRoutes = (app, fs) => {
    const dataPath = "./data/users.json";

    // Endpoint that returns data about user whose id matches
    app.get("/user/:id", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            let id = req.params.id;
            let jsonData = JSON.parse(data);
            for (const key in jsonData) {
                if (key == id) {
                    return res.send(jsonData[id]);
                }
            }
            res.status(400).send("<h1>400 - Bad Request</h1>");
        });
    });

    // Endpoint that returns data about users whose position matches
    app.get("/users", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            let response = [];
            let position = req.query.position;
            let jsonData = JSON.parse(data);
            for (const key in jsonData) {
                if (position == jsonData[key].position) {
                    response.push(jsonData[key]);
                }
            }
            res.send(response);
        });
    });
};

module.exports = userRoutes;
