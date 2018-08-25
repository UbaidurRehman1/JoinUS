"use strict";
exports.__esModule = true;
var express = require("express");
var Root;
(function (Root) {
    var IndexRouter = /** @class */ (function () {
        function IndexRouter() {
            this.router = express.Router();
        }
        IndexRouter.prototype.getRouter = function () {
            return this.router.get("/", function (req, res) {
                res.send("This is index page");
            });
        };
        return IndexRouter;
    }());
    Root.IndexRouter = IndexRouter;
})(Root = exports.Root || (exports.Root = {}));
