import * as cookie from "helper/cookie/cookieStore";

import * as Common from "@/common";

export const ConfigMatcher = () => {
  const getCookie = cookie.__getDataCookie({
    type: Common.TYPE_COMMON.DATA_TYPES.STRING,
    key: Common.COOKIE_COMMON.COOKIE_KEYS.AUTH_TOKEN,
  });
};
