import { Analytics } from "@vercel/analytics/react";
import cn from "clsx";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

import Header from "components/Header";

import "styles/globals.scss";

const mainFont = Roboto({ subsets: ["latin"], weight: ["300", "500", "700", "900"] });

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>next.js boilerplate</title>
      </head>
      <body className={mainFont.className}>
        <Header />
        <main className={cn("-my-5 mx-auto max-w-6xl bg-white")}>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

export default Layout;
