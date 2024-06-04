"use client"
import { __CreateDataCookie } from "@/helper/cookie/cookieStore";
import { useEffect } from "react";

export default function Home() {
  useEffect(() =>{
    __CreateDataCookie({key: 'authToken', type: 'string', data:'abc1231231323'})
  },[])
  return <div>page</div>;
}