import * as TypeCommon from "@/constants";
import type * as Interface from "@/interfaces/interfaces-helper/cookie-interfaces/cookie.interface";
import Cookies from "js-cookie";

// Create and Update
export const __CreateDataCookie = (
  props: Interface.ICreateCookieType
): boolean | void => {
  const { type, key, data, custom } = props;
  const cookieOptions = {
    domain: custom?.domain,
    expires: custom?.expires,
    path: custom?.path,
    sameSite: custom?.sameSite,
    secure: custom?.secure,
  };
  switch (type) {
    case TypeCommon.TYPE_CONSTANTS.DATA_TYPES.OBJECT: {
      return;
    }
    case TypeCommon.TYPE_CONSTANTS.DATA_TYPES.STRING: {
      Cookies.set(key, data, cookieOptions);
      return;
    }
    case TypeCommon.TYPE_CONSTANTS.DATA_TYPES.ARRAY: {
      return;
    }
    default:
  }
};

// Read
export const __getDataCookie = (props: Interface.ICreateCookieType) => {
  switch (props.type) {
    case TypeCommon.TYPE_CONSTANTS.DATA_TYPES.STRING: {
      return Cookies.get(props?.key);
    }
    case TypeCommon.TYPE_CONSTANTS.DATA_TYPES.OBJECT: {
      return;
    }
    case TypeCommon.TYPE_CONSTANTS.DATA_TYPES.ARRAY: {
      return;
    }
    default:
  }
};

export const __RemoveItemCookie = (props: Interface.ICreateCookieType) => {
  return Cookies.remove(props?.key);
};
