import GrisAnimation from "./GrisAnimation";
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
          {/* <MorphinQuadsAnimation /> */}
          <div className="fixed inset-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <GrisAnimation />
            </div>
          </div>
          <div className="relative z-10">
            {/* <NavBar /> */}
            {/* <section className="mt-6">{children}</section> */}
          </div>
        </main>
      </body>
    </html>
  );
};
