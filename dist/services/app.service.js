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
const client_s3_1 = require("@aws-sdk/client-s3");
const clients_1 = __importDefault(require("../clients"));
const s3KeyName_1 = __importDefault(require("../utils/s3KeyName"));
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
// const upload = multer({ dest: 'uploads/' })
class AppService {
    static uploadImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const s3Client = clients_1.default.s3.getS3Client;
            const imageName = (0, s3KeyName_1.default)((file === null || file === void 0 ? void 0 : file.originalname) || "unknown");
            try {
                const params = {
                    Bucket: process.env.S3_BUCKET,
                    Key: imageName,
                    Body: (file === null || file === void 0 ? void 0 : file.buffer) || "unknown",
                    ContentType: (file === null || file === void 0 ? void 0 : file.mimetype) || "image/jpeg",
                };
                const command = new client_s3_1.PutObjectCommand(params);
                yield s3Client.send(command);
                const signedUrl = new clients_1.default.s3.GetObjectCommand({
                    Bucket: params.Bucket,
                    Key: imageName
                });
                //export link url
                const url = yield (0, s3_request_presigner_1.getSignedUrl)(clients_1.default.s3.getS3Client, signedUrl, { expiresIn: 31536000 });
                console.log("url::", url);
                return url;
            }
            catch (err) {
                console.log("Error uploading image use S3Client: ", err);
            }
        });
    }
}
exports.default = AppService;
//# sourceMappingURL=app.service.js.map