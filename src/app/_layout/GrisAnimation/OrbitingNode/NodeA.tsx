import { StrokeWidths } from "../useGrisHandler/buildPercentageBasedDimensions";

type NodeAProps = {
  nodeOuterRadius: number;
  strokeWidths: StrokeWidths;
  color?: string;
};

const NodeA = ({
  nodeOuterRadius,
  strokeWidths,
  color = "#fff",
}: NodeAProps) => {
  return (
    <g>
      {/* outer circle */}
      <circle
        r={nodeOuterRadius}
        strokeWidth={strokeWidths.sm}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* inner circle */}
      <circle
        r={nodeOuterRadius / 2.3}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill={color}
        cx="50%"
        cy="50%"
      />
    </g>
  );
};

export default NodeA;
