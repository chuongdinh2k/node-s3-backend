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
const users_model_1 = __importDefault(require("../models/users.model"));
const password_1 = require("../utils/password");
class AuthService {
    static isUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const builderUser = yield users_model_1.default.getUserById(id);
            const [user] = builderUser;
            return user;
        });
    }
    // static async login({ email, password }: ILoginInput): Promise<any> {
    //   const builderUser = await UserModel.getUserById
    // }
    static register({ email, password, firstName, lastName }) {
        return __awaiter(this, void 0, void 0, function* () {
            const builder = yield users_model_1.default.getUserByEmail(email);
            if (builder) {
                throw new Error("User already exists");
            }
            const passwordHashed = yield (0, password_1.hashPassword)(password);
            yield users_model_1.default.createUser({
                email,
                password: passwordHashed,
                firstName,
                lastName
            });
            return {
                message: "Register successfully"
            };
        });
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map