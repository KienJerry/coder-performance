import { useTranslations } from "next-intl";

// export default function Index() {
//   const t = useTranslations('IndexPage');
//   return <h1>{t('title')}</h1>;
// }

import type { Metadata, ResolvingMetadata } from "next";
import { MainLayout } from "@/layouts/main-layout";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  // Fetch data
  const product = {
    title: "Zozo - Nền tảng Website bán hàng chuyên nghiệp",
    description: "Best platform for e-commerce",
    keywords: "e-commerce, online store",
  };

  const previousImages = (await parent).openGraph?.images || [];

  //
  return {
    title: product.title,
    description: product.description,
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
      other: {
        me: ["my-email", "my-link"],
      },
    },
    other: {
      ["fb:app_id"]: "your_app_id",
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://yourdomain.com/product/${id}`,
      images: [
        "https://teamsport-vendure-test.ferrari.aegona.work/assets/source/f5/caulong.png",
        ...previousImages,
      ],
      siteName: product.title,
      type: "website",
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      site: product.title,
      title: product.title,
      description: product.description,
      images: [
        "https://teamsport-vendure-test.ferrari.aegona.work/assets/source/f5/caulong.png",
      ],
    },
    alternates: {
      canonical: `https://yourdomain.com/product/${id}`,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Home({ params, searchParams }: Props) {
  const t = useTranslations("IndexPage");
  return (
    <MainLayout>
      <div>Page Home Dev</div>
      {/* <Link href="/pages/10">123</Link> */}
       <h1>{t("title")}</h1>;
    </MainLayout>
  );
}

export const revalidate = 3600; //1h
