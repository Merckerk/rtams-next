"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import FeatureCard from "@components/FeatureCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedInImage } from "@app/redux/features/loggedInUser/loggedInUserSlice";
import { useSession } from "next-auth/react";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  const [isUserAdmin, setIsUserAdmin] = useState(false);

  useEffect(() => {
    setIsUserAdmin(session?.user?.role === "Admin");
  }, [session?.user?.id]);

  //TODO: MAKE ENUMS
  const featureCardProps = [
    {
      featureName: "RTAMS Users",
      description: "Add, View and Edit RTAMS Users.",
      routeName: "admin-users",
      isAdminAccess: true,
    },
    {
      featureName: "Students",
      description: "Add, View and Edit Students.",
      routeName: "students",
      isAdminAccess: true,
    },
    {
      featureName: "Classlists",
      description: "View, add, edit, and delete classlists.",
      routeName: "classlists",
      isAdminAccess: true,
    },
    {
      featureName: "Attendances",
      description: "View, add, and edit Attendances.",
      routeName: "attendances",
      isAdminAccess: false,
    },
    {
      featureName: "Course Attendance",
      description: "View attendances by course, section, and term.",
      routeName: "student-attendance",
      isAdminAccess: false,
    },
    {
      featureName: "Audit Trails",
      description: "View changes made in the system.",
      routeName: "audit-trails",
      isAdminAccess: false,
    },
    {
      featureName: "Terms",
      description: "View available terms.",
      routeName: "terms",
      isAdminAccess: false,
    },
    {
      featureName: "Sections",
      description: "View available sections.",
      routeName: "sections",
      isAdminAccess: false,
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
            isAdminAccess={feature.isAdminAccess}
            isUserAdmin={isUserAdmin}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
