import "@/styles/globals.css";
import "@/styles/app.scss";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
