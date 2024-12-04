export type StrokeWidths = {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

const buildPercentageBasedDimensions = (canvasWidth: number) => {
  const onePercentOfCanvas = canvasWidth / 100;

  const strokeWidths: StrokeWidths = {
    xxs: 0.02 * onePercentOfCanvas,
    xs: 0.05 * onePercentOfCanvas,
    sm: 0.1 * onePercentOfCanvas,
    md: 0.15 * onePercentOfCanvas,
    lg: 0.2 * onePercentOfCanvas,
    xl: 0.25 * onePercentOfCanvas,
  };

  return { onePercentOfCanvas, strokeWidths };
};

export default buildPercentageBasedDimensions;
