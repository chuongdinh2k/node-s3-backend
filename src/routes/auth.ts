import { Application } from "express";
import AuthController from "../controllers/auth.controller";

export default (app: Application) => {
    app.post("/auth/register", AuthController.register);
  };
  