import UserModel from "../models/users.model";
import { ILoginInput, IRegisterInput } from "../types/auth.interface";
import { IUser } from "../types/user.interface";
import { hashPassword } from "../utils/password";

class AuthService {
  static async isUser(id: number): Promise<IUser> {
    const builderUser = await UserModel.getUserById(id);
    const [user] = builderUser;
    return user;
  }

  // static async login({ email, password }: ILoginInput): Promise<any> {
  //   const builderUser = await UserModel.getUserById
  // }

  static async register({email, password, firstName, lastName}: IRegisterInput ): Promise<any>{
    const builder = await UserModel.getUserByEmail(email);
    if(builder){
      throw new Error("User already exists");
    }
    const passwordHashed = await hashPassword(password);
    await UserModel.createUser({
      email,
      password: passwordHashed,
      firstName,
      lastName
    })
    return {
      message: "Register successfully"
    };
  }
}
export default AuthService;
