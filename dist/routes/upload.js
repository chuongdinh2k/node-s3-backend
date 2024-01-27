"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const upload_controller_1 = __importDefault(require("../controllers/upload.controller"));
const upload = (0, multer_1.default)();
exports.default = (app) => {
    app.post("/upload", upload.single("image"), upload_controller_1.default.uploadImage);
};
//# sourceMappingURL=upload.js.map