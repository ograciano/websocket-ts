
import express, { Application } from 'express';
import cors from 'cors';
import http from 'http';
import IOSocket from 'socket.io';
import { socketController } from '../sockets/controller';

class Server {
    private app: Application;
    private port: string;
    private appRoutes: any = {};
    private server: http.Server;
    private io: IOSocket.Server;

    constructor(){
    this.app = express();
    this.port = '8080';
    this.server = http.createServer(this.app);
    this.io = new IOSocket.Server(this.server);

    this.appRoutes = {};
    this.middlewares();
    this.routes();
    this.sockets();
    }

    middlewares(){
    this.app.use(cors())
    this.app.use(express.static('public'));
    }

    routes(){
    // this.app.use(this.appRoutes.usuarios, router)
    }

    sockets(){
        this.io.on('connection', socketController)
    }

    listen() {
    this.server.listen(this.port, () => console.log(`Servidor TS corriendo en el puerto ${this.port}`));
    }
}

export default Server;