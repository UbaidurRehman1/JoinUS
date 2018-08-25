import {Routers} from "./Router";
import * as express from "express";


export module Root
{
    export class IndexRouter implements Routers
    {
        public router : express.Router;

        constructor()
        {
            this.router = express.Router();
        }

        public getRouter() : express.Router
        {
            return this.router.get("/", (req:express.Request, res:express.Response) => 
            {
                res.send("This is index page");
            });
        }
    }
}