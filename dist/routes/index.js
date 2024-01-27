"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./user"));
const upload_1 = __importDefault(require("./upload"));
const auth_1 = __importDefault(require("./auth"));
exports.default = (app) => {
    app.use((0, cors_1.default)());
    (0, user_1.default)(app);
    (0, upload_1.default)(app);
    (0, auth_1.default)(app);
};
//# sourceMappingURL=index.js.map