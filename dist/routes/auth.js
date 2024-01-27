"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
exports.default = (app) => {
    app.post("/auth/register", auth_controller_1.default.register);
};
//# sourceMappingURL=auth.js.map