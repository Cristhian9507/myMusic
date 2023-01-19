const express = require('express');
const cors = require('cors');
const { redisClient } = require('./databases/redis-client');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.APP_PORT;

        this.configureDB();
        this.middlewares();
        this.routes();
    }

    async configureDB() {
        await redisClient.connect();
        console.log('redis conected');
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/search_tracks', require('./routes/buscar'));
        this.app.use('/favoritos', require('./routes/song'));
    }

    upServer() {
        this.app.listen(this.port, () => {
            console.log('Application running on port', this.port);
        });
    }
}

module.exports = Server;
