import { Response } from "express";
import AppService from "../services/app.service";
class UploadController {
  static uploadImage = async (req: any, res: Response) => {
    const result = await AppService.uploadImage(req.file);
    return res.status(200).json(result);
  };
}

export default UploadController;