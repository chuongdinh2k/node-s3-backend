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
const express_1 = __importDefault(require("express"));
const client_s3_1 = require("@aws-sdk/client-s3");
const routes_1 = __importDefault(require("./routes"));
const clients_1 = __importDefault(require("./clients"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.get("/heath", (request, response) => {
    response
        .status(200)
        .json({
        message: "Works as expected",
        info: {
            url: `${request.protocol}://${request.hostname}${request.path}`,
        },
    })
        .end();
});
(0, routes_1.default)(app);
const testKnexConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield clients_1.default.knex.testConnection();
    console.log("Is connecting DB?", check);
});
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;
testKnexConnection();
const s3 = new client_s3_1.S3Client({
    region: region,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
const params = {
    Bucket: Bucket,
    Key: `test-key`,
    Body: 'Hello-world',
    ContentType: 'text/plain'
};
const command = new client_s3_1.PutObjectCommand(params);
// const uploadFileToS3 = async() => {
//   const data = await s3.send(command);
//   console.log("data", data);
// }
// uploadFileToS3();
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map