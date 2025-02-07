import { BrowserValues } from "../../../types";
import { Page } from "src/app/types";
import useWindowDimensions from "src/designSystem/utilities/useWindowDimensions";
import { usePathname } from "next/navigation";

const useBrowserValues = (): BrowserValues => {
  const { windowDimensions } = useWindowDimensions();

  const pathname = usePathname();

  const currentPage: Page =
    pathname === "/"
      ? "HOME"
      : pathname === "/codeSamples"
        ? "CODE_SAMPLES"
        : pathname === "/about"
          ? "ABOUT_ME"
          : "";

  return {
    windowDimensions,
    currentPage,
  };
};

export default useBrowserValues;
