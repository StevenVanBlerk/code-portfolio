import buildPercentageBasedDimensions from "./buildPercentageBasedDimensions";

export type BackgroundSquare = {
  width: number;
  height: number;
  strokeWidth: number;
  isRotated?: boolean;
};

const buildBackgroundSquares = (canvasWidth: number) => {
  const { onePercentOfCanvas, strokeWidths } =
    buildPercentageBasedDimensions(canvasWidth);

  const squareWidth = onePercentOfCanvas * 26.8;

  const squares: BackgroundSquare[] = [
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

export default buildBackgroundSquares;
