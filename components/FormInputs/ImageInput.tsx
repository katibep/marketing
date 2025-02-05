"use client"

import React from "react"

import type { OurFileRouter } from "@/app/api/uploadthing/core"
import { UploadButton } from "@/utils/uploadthing";


interface ImageInputProps {
  title: string
  imageUrl: string
  setImageUrl: (url: string) => void
  endpoint: keyof OurFileRouter
}

export function ImageInput({ title, imageUrl, setImageUrl, endpoint }: ImageInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
      <UploadButton
        className="col-span-full"
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
 
          setImageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imageUrl && (
        <img src={imageUrl || "/placeholder.svg"} alt="Uploaded" className="mt-2 w-full h-32 object-cover rounded-lg" />
      )}
    </div>
  )
}

