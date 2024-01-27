import { IUser } from "../types/user.interface";
import client from "../clients";
import { IRegisterInput } from "../types/auth.interface";

class UserModel {
  /**
   * get user info by id
   * @param {number} id
   * @returns {Promise<IUser>}
   */
  static async getUserById(id: number): Promise<any> {
    const knexClient = client.knex.getInstance();
    const builderUser = await knexClient<IUser, IUser[]>("users").select("*").where("id", id);
    const [user] = builderUser;
    return user;
  }
  
  /**
   * get user info by email
   * @param {string} email
   * @returns {Promise<IUser>}
   */
  static async getUserByEmail(email: string): Promise<any> {
    const knexClient = client.knex.getInstance();
    const builderUser = await knexClient<IUser, IUser[]>("users").select("*").where("email", email);
    const [user] = builderUser;
    return user;
  }

   /**
   * create user
   * @param {IRegisterInput} createUserInput
   * @returns {Promise<any>}
   */
   static async createUser(createUserInput: IRegisterInput): Promise<any> {
    const {email, password, firstName, lastName} = createUserInput;
    const knexClient = client.knex.getInstance();
    await knexClient("users").insert({
      email,
      password,
      first_name: firstName,
      last_name: lastName
    });
  }
}
export default UserModel;
