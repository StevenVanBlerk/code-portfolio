import { UniversalLayoutHandler } from "../../types";
import buildStaticCircles from "./helpers/buildStaticCircles";
import buildStaticSquares from "./helpers/buildStaticSquares";
import useBrowserValues from "./helpers/useBrowserValues";

const useUniversalLayoutHandler = (): UniversalLayoutHandler => {
  const { windowDimensions, currentPage } = useBrowserValues();

  if (!windowDimensions.width || !windowDimensions.height)
    return {
      isLoading: true,
      canvasWidth: 0,
      backgroundCircles: [],
      backgroundSquares: [],
      windowDimensions,
      currentPage,
    };

  const isWindowLandscape = windowDimensions.width > windowDimensions.height;

  const maxCanvasWidth = isWindowLandscape
    ? 2.5 * windowDimensions.height
    : 2.5 * windowDimensions.width;

  let canvasWidth = isWindowLandscape
    ? windowDimensions.width
    : windowDimensions.height;
  if (canvasWidth > maxCanvasWidth) canvasWidth = maxCanvasWidth;

  const backgroundSquares = buildStaticSquares(canvasWidth);
  const backgroundCircles = buildStaticCircles(canvasWidth);

  const universalLayoutHandler = {
    isLoading: false,
    canvasWidth,
    backgroundCircles,
    backgroundSquares,
    windowDimensions,
    currentPage,
  };
  return universalLayoutHandler;
};

export default useUniversalLayoutHandler;
