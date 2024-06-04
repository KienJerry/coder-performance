import dynamic from "next/dynamic";
import { Main } from "./main";

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
    <body>
      <DynamicHeader />
      <Main>{children}</Main>
      <DynamicFooter />
    </body>
  );
};
