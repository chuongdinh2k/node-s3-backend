import { Application } from "express";
import multer from "multer";
import UploadController from "../controllers/upload.controller";

const upload = multer();
export default (app: Application) => {
  app.post("/upload", upload.single("image"), UploadController.uploadImage);
};
