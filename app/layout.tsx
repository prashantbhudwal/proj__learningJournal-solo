import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "My Learning Journal",
  description: "A solo project in NextJs and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
