import buildPercentageBasedDimensions from "./buildPercentageBasedDimensions";

export type BackgroundSquare = {
  x: number;
  y: number;
  width: number;
  height: number;
  strokeWidth: number;
  transform?: string;
};

const buildBackgroundSquares = (canvasWidth: number) => {
  const { onePercentOfCanvas, strokeWidths } =
    buildPercentageBasedDimensions(canvasWidth);

  const x = canvasWidth / 2;
  const width = onePercentOfCanvas * 26.8;

  const squares: BackgroundSquare[] = [
    {
      x,
      y: x,
      width,
      height: width,
      strokeWidth: strokeWidths.xs,
      transform: `rotate(45 ${x} ${x})`,
    },
    {
      x,
      y: x,
      width,
      height: width,
      strokeWidth: strokeWidths.xs,
    },
  ];
  return squares;
};

export default buildBackgroundSquares;
