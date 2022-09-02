const jsonServer = require('json-server');
const data = require('./db');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

server.listen(port);
