"use client";

import GrisAnimation from "./GrisAnimation";
import useUniversalLayoutHandler from "./helpers/useUniversalLayoutHandler";
import NavMenu from "./NavMenu";
import { Raleway } from "next/font/google";

// Adding google fonts to project
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const universalLayoutHandler = useUniversalLayoutHandler();
  const { isLoading, canvasWidth, backgroundCircles, backgroundSquares } =
    universalLayoutHandler;

  return (
    <html lang="en">
      <body className={raleway.variable}>
        <main>
          <div className="fixed inset-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <GrisAnimation
                isLoading={isLoading}
                canvasWidth={canvasWidth}
                backgroundCircles={backgroundCircles}
                backgroundSquares={backgroundSquares}
              />
            </div>
          </div>
          <div className="relative z-10">
            <NavMenu />
            <section className="mt-6">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
