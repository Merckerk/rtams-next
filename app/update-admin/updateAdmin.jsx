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
    name: "",
    userId: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
    role: "",
    audit: ""
  });

  const [errMsg, setErrMsg] = useState({
    name: "",
    userId: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
    role: "",
    audit: "",
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
      role: data.role,
      audit: ""
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
          name: post.name,
          userId: post.userId,
          email: post.email,
          username: post.username,
          password: post.password,
          role: post.role,
          audit: post.audit,
        }),
      });
      if (response.ok) {
        router.push("/admin-users");
      } else {
        const errorData = await response.json();
        if (errorData && errorData.errors) {
          setErrMsg(errorData.errors);
        } else {
          console.log("Error occurred:", response.statusText);
        }
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
      errMsg={errMsg}
      setErrMsg={setErrMsg}
    />
  );
};

export default UpdateAdmin;
