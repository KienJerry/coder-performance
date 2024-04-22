"use client";
import Cookies from 'js-cookie';
import { useEffect } from "react";

export default function LogInPage() {
  const setCookie = () => {
    console.log("first")
    Cookies.set('authToken', '456', { expires: 7 }); // Expires in 7 days
  };
  useEffect(() => {
    setCookie()
  }, []);
  return <div>login 123</div>;
}

