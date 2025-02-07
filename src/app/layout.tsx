import "./globals.css";
import type { Metadata } from "next";
import Layout from "./_layout";

export const metadata: Metadata = {
  title: "Steven van Blerk",
  description: "Frontend engineer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
