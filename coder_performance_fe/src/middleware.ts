import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routerAuth, routerNotAuth } from "@/constants/configMatcher.constants";
import * as Common from "@/common";

export function middleware(request: NextRequest) {
  const hasAuthToken = !!request.cookies.get(
    Common.COOKIE_COMMON.COOKIE_KEYS.AUTH_TOKEN
  );

  const pathName = request?.nextUrl?.pathname;
  const routesToCheck = hasAuthToken ? routerNotAuth : routerAuth;

  const existsURL = CheckPathName(routesToCheck, pathName);
  if (existsURL) return NextResponse.rewrite(new URL("/404", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: [
    // { source: "/(login|pages|profile)/:path*" }, //Check all middleware
    {
      source: "/(login|signup)/:path*", // If authToken exists, will be able to access the following urls
      has: [
        {
          type: "cookie", //Common.COOKIE_COMMON.COOKIE_KEYS.NAME,
          key: "authToken", // Common.COOKIE_COMMON.COOKIE_KEYS.AUTH_TOKEN,
        },
      ],
    },
    {
      source: "/(profile)/:path*", // If authToken doesn't exist , will be able to access the following urls
      missing: [
        {
          type: "cookie", //Common.COOKIE_COMMON.COOKIE_KEYS.NAME,
          key: "authToken", //Common.COOKIE_COMMON.COOKIE_KEYS.AUTH_TOKEN,
        },
      ],
    },
  ],
};

const CheckPathName = (getRouter: any[], pathname: string) => {
  const getPathName = extractRootPath(pathname);
  return getRouter.includes(getPathName);
};

const extractRootPath = (inputPath: string) => {
  const segments = inputPath.split("/");
  return segments.length > 1 ? "/" + segments?.[1] : "/";
};
