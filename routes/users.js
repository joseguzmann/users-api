const userRoutes = (app, fs) => {
    const dataPath = './data/users.json';

    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err) {
                throw err;
            }
            let jsonData = JSON.parse(data);
            res.send(jsonData);
        });
    });
};

module.exports = userRoutes;