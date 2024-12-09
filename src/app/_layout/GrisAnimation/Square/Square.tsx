type SquareProps = {
  width: number;
  height: number;
  strokeWidth: number;
  canvasWidth: number;
  isRotated?: boolean;
};

const Square = ({
  width,
  height,
  strokeWidth,
  canvasWidth,
  isRotated,
}: SquareProps) => {
  const dotWidth = strokeWidth;
  const distanceBetweenDots = strokeWidth * 4;
  const strokeDashArray = `${dotWidth},${distanceBetweenDots}`;

  let rectTransform = `translate(-${width / 2}, -${height / 2})`; // centering the square

  const rotationalTransform = isRotated
    ? `rotate(45 ${canvasWidth / 2} ${canvasWidth / 2})`
    : undefined;

  return (
    <g transform={rotationalTransform}>
      <rect
        x="50%"
        y="50%"
        width={width}
        height={height}
        strokeWidth={strokeWidth}
        transform={rectTransform}
        strokeDasharray={strokeDashArray}
        stroke="#fff"
        fill="transparent"
      />
    </g>
  );
};

export default Square;
