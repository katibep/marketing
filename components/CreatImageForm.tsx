 "use client";
import { ImageInput } from "@/components/FormInputs/ImageInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { CreateImage } from "@/actions/image";
import TextInput from "./FormInputs/TextInput";
import { redirect, useRouter } from "next/navigation";

export interface FormInputs {
  title: string;
  image: string;
  slug: string;
}

export default function CreateImageForm() {
    const router=useRouter();
  const [imageUrl, setImageUrl] = useState<string>("/globe.svg");
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    data.slug = data.title.split(" ").join("-").toLowerCase();
    data.image = imageUrl;
    try {
      setLoading(true);
      await CreateImage(data);
      alert("Image created successfully");
      setLoading(false);
      router.push("/");
      router.refresh();
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="uploadthing">
          <ImageInput
            title="Category Image"
            imageUrl={imageUrl}
            setImageUrl={(newUrl: string) => setImageUrl(newUrl || "/globe.svg")}
            endpoint="categoryImage"
          />
        </div>
        <div className="mb-5">
          <TextInput
               register={register}
               errors={errors}
               label="Image title"
               name="title"
             />
          {errors.title && <span className="text-red-500">This field is required</span>}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}