const userRoutes = require('./users');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Web API developed by Jose Guzman');
    });

    userRoutes(app, fs);
};

module.exports = appRouter;