import { Response } from "express";
import UserService from "../services/users.service";

class UserController {
  static getUser = (req: any, res: Response) => {
    const rs = {
      name: "test",
      age: 24,
    };
    return res.json(rs);
  };
  static getUserById = async (req: any, res: Response) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      return res.json({
        user,
      });
    } catch (e) {
      return res.status(500).json({
        message: e.message,
      });
    }
  };

  static updateUserAvatar = async (req: any, res: Response) => {
    const { id } = req.params;
    try {
      await UserService.updateAvatar(id, req.file);
      return res.status(200).json({
        success: true,
        message: "Avatar updated successfully",
      });
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  };
}
export default UserController;
