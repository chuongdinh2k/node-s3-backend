export default function generateS3KeyWithTimestamp(imageName) {
  // Get the current timestamp in milliseconds
  const timestamp = Date.now();

  // Concatenate the image name, timestamp, and "_s3" to create the S3 key
  const s3Key = `${timestamp}_${imageName}`;

  return s3Key;
}
