import * as Interface from "interfaces/interfaces-helper/cookie-interfaces/cookie.interface";
import Cookies from "js-cookie";

//Create and Update
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
    case "object": {
      return;
    }
    case "string": {
      Cookies.set(key, data, cookieOptions);
      return;
    }
    case "array": {
      return;
    }
    default:
      return;
  }
};

// Read
export const __getDataCookie = (props: Interface.ICreateCookieType) => {
  switch (props.type) {
    case "string": {
      return Cookies.get(props?.key);
    }
    case "object": {
      return;
    }
    case "array": {
      return;
    }
    default:
      return;
  }
};

export const __RemoveItemCookie = (props: Interface.ICreateCookieType) => {
  return Cookies.remove(props?.key);
};
