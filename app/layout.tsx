import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle's Website",
  description: "For the Lear Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
          <div className="mb-2 sm:mb-0">
            <a
              href="/"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="/todo"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Todo
            </a>
            <a
              href="/blog"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Blog
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
