"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [first, setFirst] = useState();
  async function fetchData() {
    try {
      let res = await axios.get("/api/users?category=dashbord");
      console.log(res);
      setFirst(res.data.message);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{first}</div>;
};

export default Dashboard;
