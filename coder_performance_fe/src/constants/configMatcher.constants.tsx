import * as cookie from "@/helper/cookie/cookieStore";
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
  if (type) return { type, router: routerPage.routerAuth };
  return { type, router: routerPage.routerNotAuth };
};

export const routerPage = {
  routerAuth: ["/profile"],
  routerNotAuth: ["/login", "/signUp"],
  routerApp: ["/"],
};
