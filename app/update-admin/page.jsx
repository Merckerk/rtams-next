"use client";

import AdminCrudForm from "@components/adminUsers/AdminCrudForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateAdmin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userid");

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    image: "",
    email: "",
    userId: "",
    username: "",
    password: "",
    repassword: "",
    isAdmin: false,
  });

  const getUserDetails = async () => {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();

    setPost({
      image: data.image,
      email: data.email,
      userId: data.userId,
      username: data.username,
      password: "",
      repassword: "",
      isAdmin: data.isAdmin,
    });
  };

  

  useEffect(() => {
    if (userId) {
      getUserDetails();
    }
  }, [userId]);

  const onUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!userId) return alert("User ID not found.");

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          image: post.image,
          email: post.email,
          userId: post.userId,
          username: post.username,
          password: post.password,
          isAdmin: post.isAdmin,
        }),
      });
      if (response.ok) {
        router.push("/admin-users");
      }
    } catch (error) {
      console.log("Error updating user details", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <AdminCrudForm
      type="Edit"
      post={post}
      setPost={setPost}
      loading={loading}
      handleSubmit={onUpdateUser}
    />
  );
};

export default UpdateAdmin;
