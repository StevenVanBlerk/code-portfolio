import MorphinQuadsAnimation from "./MorphingQuadsAnimation";
import NavBar from "./NavBar";
import { Raleway } from "next/font/google";

// Adding google fonts to project
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>
        <main>
          <MorphinQuadsAnimation />
          <div className="relative z-10">
            <NavBar />
            <section className="mt-6">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
};
