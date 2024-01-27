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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = __importDefault(require("../clients"));
class UserModel {
    /**
     * get user info by id
     * @param {number} id
     * @returns {Promise<IUser>}
     */
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const knexClient = clients_1.default.knex.getInstance();
            const builderUser = yield knexClient("users").select("*").where("id", id);
            const [user] = builderUser;
            return user;
        });
    }
    /**
     * get user info by email
     * @param {string} email
     * @returns {Promise<IUser>}
     */
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const knexClient = clients_1.default.knex.getInstance();
            const builderUser = yield knexClient("users").select("*").where("email", email);
            const [user] = builderUser;
            return user;
        });
    }
    /**
    * create user
    * @param {IRegisterInput} createUserInput
    * @returns {Promise<any>}
    */
    static createUser(createUserInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, firstName, lastName } = createUserInput;
            const knexClient = clients_1.default.knex.getInstance();
            yield knexClient("users").insert({
                email,
                password,
                first_name: firstName,
                last_name: lastName
            });
        });
    }
}
exports.default = UserModel;
//# sourceMappingURL=users.model.js.map