import React from "react";
import { Main } from "./main";
import { Footer } from "./footer";
import { Header } from "./header";

// const Header = dynamic(() => import('./header').then((mod) => mod.Header), {
//   ssr: false,
// })

type TProps = {
  breadcrumb?: string;
  userPage?: boolean;
  children?: React.ReactNode | any;
};

export const MainLayout: React.FC<TProps> = ({
  children,
}) => {
  return (
    <body>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </body>
  );
};

