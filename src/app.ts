
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import {Routes} from "./routes/activityRoutes";

class App {

    public app: express.Application;
    public router: express.Router;
    public routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.router = express.Router();
        this.config();
        this.routes.routes(this.app);

        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: false,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            preflightContinue: false
        };

        this.router.use(cors(options));
        this.router.options("*", cors(options));
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;