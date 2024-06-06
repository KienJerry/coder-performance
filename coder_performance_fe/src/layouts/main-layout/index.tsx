import dynamic from "next/dynamic";
import { Main } from "./main";
import HeaderSkeleton from "@/layouts/main-layout/header/skeleton";

const DynamicHeader = dynamic(
  () => import("./header").then((mod) => mod.Header),
  {
    ssr: false,
    loading: () => <HeaderSkeleton />,
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
    <body>
      <DynamicHeader />
      <Main>{children}</Main>
      <DynamicFooter />
    </body>
  );
};
