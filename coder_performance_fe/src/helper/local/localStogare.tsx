import * as Interface from "interfaces/interfaces-helper/local-interfaces/ILocalStorage.interface";
import * as TypeCommon from "common/type-common/type.common";

//Create and Update
export const __CreateDataLocal = (
  props: Interface.ICreateLocalType
): boolean | void => {
  switch (props.type) {
    case TypeCommon.DATA_TYPES.OBJECT: {
      localStorage.setItem(props.key, JSON.stringify(props.data));
      return;
    }
    case TypeCommon.DATA_TYPES.STRING: {
      localStorage.setItem(props.key, props.data);
      return;
    }
    case TypeCommon.DATA_TYPES.ARRAY: {
      const getExistingData = localStorage.getItem(props.key);
      let cloneDataArray = getExistingData ? JSON.parse(getExistingData) : [];
      const existingItemIndex = cloneDataArray.findIndex(
        (item: any) => item?.id === props.data?.id
      );
      if (existingItemIndex !== -1) {
        cloneDataArray[existingItemIndex] = props.data;
      } else {
        cloneDataArray.push(props.data);
      }
      localStorage.setItem(props.key, JSON.stringify(cloneDataArray));
      return existingItemIndex === -1;
    }
    default:
      return;
  }
};

// Read
export const __getDataLocal = (props: Interface.ICreateLocalType) => {
  switch (props.type) {
    case TypeCommon.DATA_TYPES.OBJECT: {
      const existingDataString = localStorage.getItem(props?.key);
      return existingDataString ? JSON.parse(existingDataString) : null;
    }
    case TypeCommon.DATA_TYPES.STRING: {
      return localStorage.getItem(props?.key);
    }
    case TypeCommon.DATA_TYPES.ARRAY: {
      const existingDataString = localStorage.getItem(props?.key);
      return existingDataString ? JSON.parse(existingDataString) : null;
    }
    default:
      return;
  }
};

// Remove
export const __RemoveItemLocal = (props: Interface.ICreateLocalType) => {
  return localStorage.removeItem(props?.key);
};

//Remove single item
export const __RemoveSingleItemLocal = (props: Interface.ICreateLocalType) => {
  const getExistingData = localStorage.getItem(`${props.key}`);
  let cloneDataArray = getExistingData ? JSON.parse(getExistingData) : [];
  const existingItemIndex = cloneDataArray.findIndex(
    (item: any) => item?.id === props?.data?.id
  );

  if (existingItemIndex !== -1) {
    cloneDataArray.splice(existingItemIndex, 1);
    localStorage.setItem(`${props?.key}`, JSON.stringify(cloneDataArray));

    return true;
  }
  return false;
};
