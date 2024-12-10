import useWindowDimensions from "@/designSystem/utilities/useWindowDimensions";
import buildBackgroundCircles, {
  BackgroundCircle,
} from "./buildBackgroundCircles";
import buildBackgroundSquares, {
  BackgroundSquare,
} from "./buildBackgroundSquares";

type GrisHandler = {
  isLoading: boolean;
  canvasWidth: number;
  backgroundCircles: BackgroundCircle[];
  backgroundSquares: BackgroundSquare[];
};

const useGrisHandler = (): GrisHandler => {
  const { windowDimensions } = useWindowDimensions();
  if (!windowDimensions.width || !windowDimensions.height)
    return {
      isLoading: true,
      canvasWidth: 0,
      backgroundCircles: [],
      backgroundSquares: [],
    };

  const isWindowLandscape = windowDimensions.width > windowDimensions.height;

  const maxCanvasWidth = isWindowLandscape
    ? 2.5 * windowDimensions.height
    : 2.5 * windowDimensions.width;

  let canvasWidth = isWindowLandscape
    ? windowDimensions.width
    : windowDimensions.height;
  if (canvasWidth > maxCanvasWidth) canvasWidth = maxCanvasWidth;

  const backgroundSquares = buildBackgroundSquares(canvasWidth);
  const backgroundCircles = buildBackgroundCircles(canvasWidth);

  const grisAnimationValues = {
    isLoading: false,
    canvasWidth,
    backgroundCircles,
    backgroundSquares,
    windowDimensions,
  };
  return grisAnimationValues;
};

export default useGrisHandler;
