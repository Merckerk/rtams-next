"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import FeatureCard from "@components/FeatureCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedInImage } from "@app/redux/features/loggedInUser/loggedInUserSlice";


const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const featureCardProps = [
    {
      featureName: "RTAMS Users",
      description: "View and Edit RTAMS Users.",
      routeName: "admin-users",
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
