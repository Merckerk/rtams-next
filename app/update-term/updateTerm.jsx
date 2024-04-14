"use client";

import TermCrudForm from "@components/term/TermCrudForm";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateTerm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const termid = searchParams.get("termid");

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    term: "",
    audit: "",
  });

  const getTermDetails = async () => {
    try {
      setLoading(true);
      const termResponse = await fetch(`api/terms/${termid}`);
      const response = await termResponse.json();

      if (response) {
        const data = response.data;
        setPost({ ...post, term: data.term });
      } else {
        console.error("error fetching term data");
      }
    } catch (error) {
      console.error("error fetching term data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTermDetails();
  }, []);

  const validityCheck = (action) => {
    if (action == "Edit") {
      return !!(post.term && post.audit);
    } else if (action == "Delete") {
      return !!post.audit;
    }
  };

  const onUpdateTerm = async (e) => {
    e.preventDefault();
    if (!validityCheck("Edit")) {
      toast.error("Please fill in all the fields!");
      return;
    }
    try {
      setLoading(true);
      const { term, audit } = post;

      const postValues = {
        term,
        audit,
      };

      const response = await fetch(`/api/terms/${termid}`, {
        method: "PATCH",
        body: JSON.stringify(postValues),
      });

      const data = await response.json();
      const success = data.success;

      if (success) {
        toast.success("Successfully edited a term!");
        router.push("/terms");
      } else {
        toast.error("Error updating data.");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteTerm = async () => {
    const hasConfirmed = confirm("Are you sure you want to delete this term?");
    if (hasConfirmed) {
      if (!validityCheck("Delete")) {
        toast.error("Please fill in the audit field!");
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(`/api/terms/${termid}`, {
          method: "DELETE",
          body: JSON.stringify({ audit: post?.audit }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          console.log("term deleted");
          router.push("/terms");
        } else {
          console.log(
            "Error deleting class list:",
            data.error || "Unknown error"
          );
        }
      } catch (error) {
        console.log("Error deleting term", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Suspense>
      <TermCrudForm
        type="Edit"
        post={post}
        setPost={setPost}
        loading={loading}
        handleSubmit={onUpdateTerm}
        handleDelete={onDeleteTerm}
      />
    </Suspense>
  );
};

export default UpdateTerm;
