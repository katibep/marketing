"use server"
import { FormInputs } from "@/components/CreatImageForm";
// import { FormInputs } from "@/app/newimage/page";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function CreateImage(data:FormInputs ) {
      const slug = data.slug
    try {
      const existingImage = await db.image.findUnique({
        where: {
          slug,
        },
      });
      if (existingImage) {
        return existingImage;
      }
      const newImage = await db.image.create({
        data,
      });
      // console.log(newCategory);
      revalidatePath("/");
      return newImage;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  export async function getAllImages(){
    try {
      const images = await db.image.findMany()
      return images 
    } catch (error) {
   console.log(error)   
    }
  }