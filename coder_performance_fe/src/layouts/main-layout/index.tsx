import dynamic from "next/dynamic";
import { Main } from "./main";
import React from "react";

const DynamicHeader = dynamic(
  () => import("./header").then((mod) => mod.Header),
  {
    ssr: true,
    loading: () => <p>Loading Header...</p>,
  }
);
const DynamicFooter = dynamic(
  () => import("./footer").then((mod) => mod.Footer),
  {
    ssr: true,
    loading: () => <p>Loading Footer...</p>,
  }
);

type TProps = {
  breadcrumb?: string;
  userPage?: boolean;
  children?: React.ReactNode | any;
};

export const MainLayout: React.FC<TProps> = ({ children }) => {
  return (
    <React.Fragment>
      <DynamicHeader />
      <Main>{children}</Main>
      <DynamicFooter />
    </React.Fragment>
  );
};
