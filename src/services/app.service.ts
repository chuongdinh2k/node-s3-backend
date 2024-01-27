import { PutObjectCommand } from "@aws-sdk/client-s3";
import clients from "../clients";

class AppService {
  static async uploadImage(file: any, keyName?: string) {
    const s3Client = clients.s3.getS3Client; 
    const imageName = keyName ?? file?.originalname;
    console.log("keyName", keyName);
    try {
      const params = {
        Bucket: process.env.S3_BUCKET,
        Key: imageName,
        Body: file?.buffer || "unknown",
        ContentType: file?.mimetype || "image/jpeg",
      };
      const command = new PutObjectCommand(params);
      const result = await s3Client.send(command);
      console.log("result::", result);
    } catch (err) {
      console.log("Error uploading image use S3Client: ", err);
    }
  }
}

export default AppService;


