export interface ICreateCookieType {
  type?: string | object | number | any[];
  key: string;
  data?: any;
  custom?: {
    path?: string;
    expires?: number | Date;
    domain?: string;
    sameSite?: "Strict" | "Lax" | "None" | "strict" | "lax" | "none";
    secure?: boolean;
  };
}
