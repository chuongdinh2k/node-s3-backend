import { Response } from "express";
import AuthService from "../services/auth.service";

class AuthController {
  static async register(req, res: Response) {
    const { email, password, firstName, lastName } = req.body;
    try {
      const rs = await AuthService.register({
        email,
        password,
        firstName,
        lastName,
      });
      return res.status(200).json(rs);
    } catch (err) {
      console.log("errr", err);
      return res.status(500).json(err);
    }
  }
}
export default AuthController;
