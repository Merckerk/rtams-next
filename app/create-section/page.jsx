"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SectionCrudForm from "@components/sections/SectionCrudForm";

const CreateSection = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    section: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onCreateSection = async () => {
    try {
      setIsLoading(true);
      const { section } = post;

      const postValues = {
        section,
      };

      const response = await axios.post("api/sections/create", postValues);
      toast.success("Successfully created a section!");
      router.push("/sections");
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionCrudForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      handleSubmit={onCreateSection}
    />
  );
};

export default CreateSection;
