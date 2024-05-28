import dynamic from 'next/dynamic'
import { Main } from "./main";
import { Footer } from "./footer";

const DynamicHeader = dynamic(() => import('./header').then((mod) => mod.Header), {
  ssr: false,
});

// const DynamicHomePage = dynamic(() => import('./header'), {
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
      <DynamicHeader />
      <Main>{children}</Main>
      <Footer />
    </body>
  );
};

