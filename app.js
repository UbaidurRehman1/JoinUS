"use strict";
exports.__esModule = true;
var express = require("express");
var root = require("./routers/Root");
var App = /** @class */ (function () {
    function App() {
        var app = express();
        app.set("view engine", "ejs");
        app.use(express.static("public"));
        //instances
        var indexRouter = new root.Root.IndexRouter();
        app.use("/", indexRouter.getRouter());
        this.listen(app);
    }
    App.prototype.listen = function (app) {
        app.listen(8080, function () {
            console.log("Server started at 8080");
        });
    };
    return App;
}());
new App();
