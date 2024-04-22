import * as cookie from "helper/cookie/cookieStore";
import * as Common from "@/common";

export const ConfigMatcher = () => {
  const getCookie = cookie.__getDataCookie({
    type: "string",
    key: Common.COOKIE_COMMON.COOKIE_KEYS.AUTH_TOKEN,
  });
  // token: {
  //   colorPrimary: "#EC3237",
  //   colorFillSecondary: "#3E4095",
  //   fontFamily: "Public Sans, sans-serif",
  // },
};
