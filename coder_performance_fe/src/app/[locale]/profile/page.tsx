"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [data, setData] = useState("");
  useEffect(() => {
    setData("kiên");
  }, []);
  return <div>{data}</div>;
}
