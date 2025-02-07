import { StaticSquare } from "../../../types";
import buildPercentageBasedDimensions from "./buildPercentageBasedDimensions";

const buildStaticSquares = (canvasWidth: number) => {
  const { onePercentOfCanvas, strokeWidths } =
    buildPercentageBasedDimensions(canvasWidth);

  const squareWidth = onePercentOfCanvas * 26.8;

  const squares: StaticSquare[] = [
    {
      width: squareWidth,
      height: squareWidth,
      strokeWidth: strokeWidths.xs,
      isRotated: true,
    },
    {
      width: squareWidth,
      height: squareWidth,
      strokeWidth: strokeWidths.xs,
    },
  ];
  return squares;
};

export default buildStaticSquares;
