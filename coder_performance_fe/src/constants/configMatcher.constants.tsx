import * as cookie from "@/helper/cookie/cookieStore";
import * as Constants from "@/constants";

export const ConfigMatcher = (type: boolean) => {
  return RouterMatcher(
    type ||
      !!cookie.__getDataCookie({
        type: Constants.TYPE_CONSTANTS.DATA_TYPES.STRING,
        key: Constants.COOKIE_CONSTANTS.COOKIE_KEYS.AUTH_TOKEN,
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
