import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  categoryImage: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url);
      return { uploadedBy: "ie" };
    }
  ),
  productImages: f({
    image: { maxFileSize: "1MB", maxFileCount: 4 },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.url);
    return { uploadedBy: "ie" };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
