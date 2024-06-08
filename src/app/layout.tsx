import { Inter } from "next/font/google";
import { ApolloWrapper } from "~/lib/apollo-provider";

import { fullSiteTitle, siteDescription } from "~/constants";

import "typeface-open-sans";
import "typeface-merriweather";
import "typeface-josefin-sans";

import "~/assets/styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: fullSiteTitle,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
