import cors from "cors";
import { Application } from "express";
import UserRoutes from "./user";
import UploadRoutes from "./upload";
import AuthRoutes from "./auth";

export default (app: Application)=> {
    app.use(cors());
    UserRoutes(app);
    UploadRoutes(app);
    AuthRoutes(app);
}

