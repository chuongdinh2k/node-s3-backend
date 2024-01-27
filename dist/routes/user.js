"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.default = (app) => {
    app.get("/users", (req, res) => {
        return res.json({
            message: "hello world",
        });
    });
    app.get("/users/:id", auth_middleware_1.isAuthenticated, user_controller_1.default.getUserById);
};
//# sourceMappingURL=user.js.map