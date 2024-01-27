import { Application } from "express";
import multer from "multer";
import UserController from "../controllers/user.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";
const upload = multer();
export default (app: Application) => {
  app.post(
    "/users/:id/avatar",
    upload.single("image"),
    UserController.updateUserAvatar
  );
  app.get("/users", (req, res) => {
    return res.json({
      message: "hello world",
    });
  });
  app.get("/users/:id", UserController.getUserById);
};
