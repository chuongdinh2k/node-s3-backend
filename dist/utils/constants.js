"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bucket = exports.secretAccessKey = exports.accessKeyId = exports.s3Bucket = exports.region = void 0;
exports.region = process.env.S3_REGION;
exports.s3Bucket = process.env.S3_BUCKET;
exports.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
exports.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
exports.Bucket = process.env.S3_BUCKET;
//# sourceMappingURL=constants.js.map