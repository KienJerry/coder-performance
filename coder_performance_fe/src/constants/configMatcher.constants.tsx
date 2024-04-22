import * as cookie from "helper/cookie/cookieStore";
import * as Common from "@/common";

export const ConfigMatcher = (type: boolean) => {
  return RouterMatcher(
    type ||
      !!cookie.__getDataCookie({
        type: Common.TYPE_COMMON.DATA_TYPES.STRING,
        key: Common.COOKIE_COMMON.COOKIE_KEYS.AUTH_TOKEN,
      })
  );
};

const RouterMatcher = (type: boolean) => {
  if (type) return { type, router: routerAuth };
  return { type, router: routerNotAuth };
};

export const routerAuth = ["/pages"];
export const routerNotAuth = ["/login", "/signup"];
