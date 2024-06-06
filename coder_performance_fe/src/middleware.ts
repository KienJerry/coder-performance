import createIntlMiddleware from "next-intl/middleware";

import { NextRequest, NextResponse } from "next/server";
import { routerPage } from "@/constants/configMatcher.constants";
import * as Constants from "@/constants";
import { locales, defaultLocale } from "@/i18n";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

export function middleware(request: NextRequest) {
  // Handle authentication and route checking
  if (!handleAuthentication(request)) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  // Handle i18n middleware
  // const intlResponse = intlMiddleware(request);
  // if (intlResponse) return intlResponse;

  return NextResponse.next();
}

const handleAuthentication = (request: NextRequest): boolean => {
  const hasAuthToken = !!request.cookies.get(
    Constants.COOKIE_CONSTANTS.COOKIE_KEYS.AUTH_TOKEN
  );
  const pathName = request.nextUrl.pathname;
  const routesToCheck = hasAuthToken
    ? routerPage.routerNotAuth
    : routerPage.routerAuth;

  return !checkPathName(routesToCheck, pathName);
};

export const config = {
  matcher: [
    // "/((?!api|_next/static|_next/image|favicon.ico).*)", // doesn't check middleware
    // { source: "/(vi|en)/:path*" }, //Check all middleware
    {
      source: "/(login|signup)/:path*", // If authToken exists, will be able to access the following urls
      has: [
        {
          type: "cookie",
          key: "authToken",
        },
      ],
    },
    {
      source: "/(profile)/:path*", // If authToken doesn't exist , will be able to access the following urls
      missing: [
        {
          type: "cookie",
          key: "authToken",
        },
      ],
    },
  ],
};

const checkPathName = (routes: string[], pathname: string): boolean => {
  const rootPath = extractRootPath(pathname);
  return routes.includes(rootPath);
};

const extractRootPath = (inputPath: string): string => {
  const segments = inputPath.split("/");
  return segments.length > 1 ? `/${segments[1]}` : "/";
};
