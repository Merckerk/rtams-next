"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import FeatureCard from "@components/FeatureCard";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful.");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const featureCardProps = [
    {
      featureName: "Teaching Load",
      description: "View your load and teaching schedules.",
      routeName: "teaching-load",
    },
    {
      featureName: "My Profile",
      description: "Change profile settings",
      routeName: "my-profile",
    },
    {
      featureName: "My Dashboard",
      description: "View upcoming classes, events, and attendance statistics",
      routeName: "my-dashboard",
    },
    {
      featureName: "Email Blast",
      description: "Send an Email Blast to my Students or Co-Workers",
      routeName: "email-blast",
    },
    {
      featureName: "Calendar",
      description:
        "Keep track of important academic events, such as meetings, exams, and deadlines",
      routeName: "calendar",
    },
    {
      featureName: "Help Area",
      description: "Ask the developers for help",
      routeName: "help-area",
    },
  ];

  const [currentUser, setCurrentUser] = useState("nothing");

  const fetchCurrentUser = async () => {
    const res = await axios.get("/api/users/currentUser");
    setCurrentUser(res.data.userInfo.username);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">RTAMS</span>
      </h1>
      <p className="desc text-center mb-10">
        RTAMS, the Real-Time Attendance Monitoring System is a Design Project
        engineered to streamline all attendance related needs within the
        academe.
      </p>

      <hr />

      <h3>Welcome! You are currently logged in as:</h3>
      <h2 className="p-1 rounded bg-green-500">
        <center> {currentUser} </center>
      </h2>

      <button
        onClick={logout}
        className="bg-red-500 mt-4 hover: bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {featureCardProps.map((feature, index) => (
          <FeatureCard
            key={index}
            featureName={feature.featureName}
            description={feature.description}
            routeName={feature.routeName}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
