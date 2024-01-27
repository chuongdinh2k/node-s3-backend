import { getSignedUrl } from "@aws-sdk/cloudfront-signer"; // ESM
import clients from "../clients";
import UserModel from "../models/users.model";
import { Bucket } from "../utils/constants";
import AppService from "./app.service";

class UserService {
  static async getUserById(id: number): Promise<any> {
    const user = await UserModel.getUserById(id);
    if(!user){
      throw new Error("User not found")
    }
    const avatar = await this.getAvatar(user.id);
    return {
      ...user,
      avatar_url: avatar || null
    };
  }

  static async updateAvatar(id: number, file: any): Promise<any> {
    const user = await await UserModel.getUserById(id);
    console.log("user", user);
    if(!file){
      throw new Error("File is not valid");
    }
    if(!user){
      throw new Error("User not found");
    }
    const keyName = `profile-${user.id}`; 
    await AppService.uploadImage(file, keyName)
  }

  static async getAvatar(userId: number){
    const s3Client = clients.s3.getS3Client;
    const keyName = `profile-${userId}`; 
    try {
      // const signedUrl = new clients.s3.GetObjectCommand({
      //   Bucket: Bucket,
      //   Key: keyName
      // }) 
      //export link url
      // const url = await getSignedUrl(s3Client, signedUrl, {expiresIn: 3600})
      //cloudfront
      // const signedUrl = getSignedUrl({
      //   url: ,
      //   keyPairId,
      //   dateLessThan,
      //   privateKey,
      // });
      // return url;
      return "";
    }

    catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
export default UserService;
