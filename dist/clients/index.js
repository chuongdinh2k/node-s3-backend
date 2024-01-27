"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databases_1 = __importDefault(require("./databases"));
const s3_1 = __importDefault(require("./aws/s3"));
exports.default = {
    knex: databases_1.default,
    s3: s3_1.default
};
//# sourceMappingURL=index.js.map