"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [first, setFirst] = useState();
  async function fetchData() {
    try {
      let res = await axios.get("/api/users?category=user");
      console.log(res);
      setFirst(res.data.message);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{first}</div>;
};

export default User;
