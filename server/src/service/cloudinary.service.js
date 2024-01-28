import cloudinary from "cloudinary";
export async function uploadToCloudinary(buffer) {
  const uploadResult = await new Promise((resolve) => {
    cloudinary.v2.uploader
      .upload_stream((err, result) => {
        return resolve(result);
      })
      .end(buffer);
  });
  return uploadResult;
}
