const userRoutes = require('./users');

const appRouter = (app, fs) => {
    // Default endpoint at /
    app.get('/', (req, res) => {
        res.send('Web API developed by Jose Guzman');
    });

    // Import endpoints that show user's information
    userRoutes(app, fs);
};

module.exports = appRouter;