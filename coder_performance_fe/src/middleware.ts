import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { authenticate } from 'auth-provider'

export function middleware(request: NextRequest) {
  const allCookies = request.cookies;
  console.log(allCookies, "allCookiesallCookies");
  if (!allCookies) {
  }
  //   const isAuthenticated = authenticate(request)

  // If the user is authenticated, continue as normal
  //   if (isAuthenticated) {
  return NextResponse.next();
  //   }

  // Redirect to login page if not authenticated
  // return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    {
      source: "/(pages)",
      has: [{ type: "cookie", key: "authToken" }], // If authToken exists, will be able to access the following urls
    },
    {
      source: "/(login|signup)",
      missing: [{ type: "cookie", key: "authToken" }], // If authToken doesn't exist , will be able to access the following urls
    },
  ],
};
