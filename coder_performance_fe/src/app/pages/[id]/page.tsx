// "use client"
// import { __CreateDataCookie } from "@/helper/cookie/cookieStore";
// import { useEffect } from "react";

// export default function Home() {
//   useEffect(() =>{
//     __CreateDataCookie({key: 'authToken', type: 'string', data:'abc1231231323'})
//   },[])
//   return <div>page</div>;
// }

import type { Metadata, ResolvingMetadata } from "next";
import { MainLayout } from "@/layouts/main-layout";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  console.log("generateMetadata");
  // fetch data
  const product = {
    title: "Title HomePage",
  };

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL("https://yourdomain.com"), // Thay thế 'https://yourdomain.com' bằng URL thực tế của bạn
    title: product.title,
    description: "Generated by Next.js",
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/some-specific-page-image.jpg"],
    },
  };
}

export default function Home({ params, searchParams }: Props) {
  console.log("Home", params, searchParams);
  if (params.id == "10") {
    console.log("error");
    notFound(); // Nếu không tìm thấy sản phẩm, sẽ chuyển hướng đến trang 404
  }
  return (
    <MainLayout>
      <div>page</div>
    </MainLayout>
  );
}

export const revalidate = 3600; //1h

export function generateStaticParams(props: any) {
  // Hàm này chạy trong quá trình build và trả về một danh sách các tham số động cho các trang cần được tạo tĩnh trước. Các tham số này sẽ được sử dụng để tạo ra các trang tĩnh.
  console.log("first");
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
