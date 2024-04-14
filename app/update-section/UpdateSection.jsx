"use client";

import SectionCrudForm from "@components/sections/SectionCrudForm";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sectionid = searchParams.get("sectionid");

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    section: "",
    audit: "",
  });

  const getSectionDetails = async () => {
    try {
      setLoading(true);
      const sectionResponse = await fetch(`api/sections/${sectionid}`);
      const response = await sectionResponse.json();

      console.log("response: ",response)
    //   if (response) {
    //     const data = response.data;
    //     setPost({ ...post, section: data });
    //   } else {
    //     console.error("error fetching section data");
    //   }
    } catch (error) {
      console.error("error fetching section data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSectionDetails();
  }, []);

  const validityCheck = (action) => {
    if (action == "Edit") {
      return !!(post.section && post.audit);
    } else if (action == "Delete") {
      return !!post.audit;
    }
  };

  const onUpdateSection = async (e) => {
    e.preventDefault();
    if (!validityCheck("Edit")) {
      toast.error("Please fill in all the fields!");
      return;
    }
    try {
      setLoading(true);
      const { section, audit } = post;

      const postValues = {
        section,
        audit,
      };

      const response = await fetch(`/api/sections/${sectionid}`, {
        method: "PATCH",
        body: JSON.stringify(postValues),
      });

      const data = await response.json();
      const success = data.success;

      if (success) {
        toast.success("Successfully edited a section!");
        router.push("/sections");
      } else {
        toast.error("Error updating data.");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteSection = async () => {
    const hasConfirmed = confirm("Are you sure you want to delete this section?");
    if (hasConfirmed) {
      if (!validityCheck("Delete")) {
        toast.error("Please fill in the audit field!");
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(`/api/sections/${sectionid}`, {
          method: "DELETE",
          body: JSON.stringify({ audit: post?.audit }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          console.log("section deleted");
          router.push("/sections");
        } else {
          console.log(
            "Error deleting class list:",
            data.error || "Unknown error"
          );
        }
      } catch (error) {
        console.log("Error deleting section", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Suspense>
      <SectionCrudForm
        type="Edit"
        post={post}
        setPost={setPost}
        loading={loading}
        handleSubmit={onUpdateSection}
        handleDelete={onDeleteSection}
      />
    </Suspense>
  );
};

export default UpdateSection;
