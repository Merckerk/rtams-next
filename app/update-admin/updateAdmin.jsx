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
    name: "",
    userId: "",
    username: "",
    password: "",
    repassword: "",
    load: []
  });

  const getUserDetails = async () => {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();

    setPost({
      image: data.image,
      email: data.email,
      name: data.name,
      userId: data.userId,
      username: data.username,
      password: "",
      repassword: "",
      load: []
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
          name: post.name,
          userId: post.userId,
          username: post.username,
          password: post.password,
          load: post.load,
        }),
      });
      if (response.ok) {
        //LUWIS
        router.push("/admin-users");
        //LUWIS
      }
    } catch (error) {
      console.log("Error updating user details", error);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteUser = async () => {
    const hasConfirmed = confirm("Are you sure you want to delete this user?");

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/users/${userId}`, {
          method: "DELETE",
        });
        
        if(response.ok) {
          router.push('/admin-users');
        }

      } catch(error){
        console.log('Error deleting the user', error);
      }
    }
  }

  return (
    <AdminCrudForm
      type="Edit"
      post={post}
      setPost={setPost}
      loading={loading}
      handleSubmit={(e) => onUpdateUser(e)}
      handleDelete={onDeleteUser}
    />
  );
};

export default UpdateAdmin;
