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

  const canvasWidth =
    windowDimensions.width > windowDimensions.height
      ? windowDimensions.width
      : windowDimensions.height;

  const backgroundSquares = buildBackgroundSquares(canvasWidth);
  const backgroundCircles = buildBackgroundCircles(canvasWidth);

  const grisAnimationValues = {
    isLoading: false,
    canvasWidth,
    backgroundCircles,
    backgroundSquares,
  };
  return grisAnimationValues;
};

export default useGrisHandler;
