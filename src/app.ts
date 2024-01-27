import express, { Request, Response } from "express";
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import Routes from "./routes";
import client from "./clients";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.get("/heath", (request: Request, response: Response) => {
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
Routes(app);

const testKnexConnection = async () => {
  const check = await client.knex.testConnection();
  console.log("Is connecting DB?", check);
};

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;

testKnexConnection();

const s3 = new S3Client({
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

const command = new PutObjectCommand(params);

// const uploadFileToS3 = async() => {
//   const data = await s3.send(command);
//   console.log("data", data);
// }
// uploadFileToS3();
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
