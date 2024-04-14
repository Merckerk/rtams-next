"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/AdminCrudForm";
import toast from "react-hot-toast";
import ClasslistCrudForm from "@components/classlist/classlistCrudForm";
import TermCrudForm from "@components/term/TermCrudForm";

const CreateTerm = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    term: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onCreateTerm = async () => {
    try {
      setIsLoading(true);
      const { term } = post;

      const postValues = {
        term,
      };

      const response = await axios.post("api/terms/create", postValues);
      toast.success("Successfully created a term!");
      router.push("/terms");
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TermCrudForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      handleSubmit={onCreateTerm}
    />
  );
};

export default CreateTerm;
