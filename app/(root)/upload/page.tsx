"use client";

import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/hooks/useFileInput";
import React, { ChangeEvent, FormEvent, useState } from "react";

const UploadVideoPage = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<VideoFormValues>({
    description: "",
    tags: "",
    title: "",
    visibility: "public",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!video.file || !thumbnail.file) {
        setError("Please upload video and thumbnail");
        return;
      }
      if (!formData.title || !formData.description) {
        setError("Please fill in all the details");
        return;
      }
      // TODO:
      // Upload video to Bunny
      // Upload the thumbnail to database
      // Attach thumbnail to video
      // Create a new database entry for the video details (url, data)

      // 2:06:19
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={"wrapper-md upload-page"}>
      <h1>Upload a video</h1>
      {error && <div className={"error-field"}>{error}</div>}
      <form
        className={
          "rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
        }
        onSubmit={handleSubmit}
      >
        <FormField
          id={"title"}
          label={"Title"}
          onChange={handleInputChange}
          placeholder={"Enter a clear and concise video title"}
          value={formData.title}
        />
        <FormField
          as={"textarea"}
          id={"description"}
          label={"Description"}
          onChange={handleInputChange}
          placeholder={"Describe what this video is about"}
          value={formData.description}
        />
        <FileInput
          id={"video"}
          label={"Video"}
          accept={"video/*"}
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type={"video"}
        />
        <FileInput
          id={"thumbnail"}
          label={"Thumbnail"}
          accept={"image/*"}
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type={"image"}
        />
        <FormField
          as={"select"}
          id={"visibility"}
          label={"Visibility"}
          onChange={handleInputChange}
          value={formData.visibility}
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />
        <button
          type={"submit"}
          disabled={isSubmitting}
          className={"submit-button"}
        >
          {isSubmitting ? "Uploading..." : "Upload video"}
        </button>
      </form>
    </div>
  );
};

export default UploadVideoPage;
