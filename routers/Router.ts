import * as express from "express";

export interface Routers 
{
    getRouter() : express.Router;
}