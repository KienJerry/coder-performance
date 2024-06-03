// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
