"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = exports.getTransaction = exports.getInstance = void 0;
const knex_1 = require("knex");
let client = null;
/**
 * Create an Knex instance
 * @param {Partial<KnexType.Config>} options
 * @returns {KnexType}
 */
function getInstance(options = {}) {
    if (client) {
        return client;
    }
    const DB_HOST = process.env.MYSQL_HOST || "127.0.0.1";
    const DB_USER = process.env.MYSQL_USER || "root";
    const DB_PWD = process.env.MYSQL_PWD || "chuong123";
    const DB_NAME = process.env.MYSQL_DBNAME || "node_s3";
    const DB_PORT = process.env.MYSQL_PORT || "3306";
    client = (0, knex_1.knex)(Object.assign({ client: "mysql2", connection: {
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PWD,
            database: DB_NAME,
            dateStrings: true,
        }, pool: { min: 1, max: 10 } }, options));
    return client;
}
exports.getInstance = getInstance;
function getTransaction() {
    return __awaiter(this, void 0, void 0, function* () {
        const knexTrx = yield getInstance().transaction();
        return knexTrx;
    });
}
exports.getTransaction = getTransaction;
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield getInstance().raw("SELECT 1");
            return true;
        }
        catch (error) {
            return false;
        }
    });
}
exports.testConnection = testConnection;
exports.default = {
    getInstance,
    getTransaction,
    testConnection,
};
//# sourceMappingURL=index.js.map