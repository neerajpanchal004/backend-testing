"use client";
import Dashboard from "@/app/Dashboard";
import User from "@/app/User";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useParams();
  const { category } = router;
  console.log(category);
  if (category == "dashbord") {
    return <Dashboard />;
  }
  if (category == "user") {
    return <User />;
  }

  return <div>Invalid</div>;
};

export default Page;
