import "@/styles/globals.css";
import "@/styles/app.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}