import "@/styles/globals.css";
import "@/styles/app.scss";
import Script from "next/script";

// Đa ngôn ngữ

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return children;
// }

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return <html lang="vi">{children}</html>;
}
