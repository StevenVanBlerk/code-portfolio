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
      {/* outer ring */}
      <circle
        r={nodeOuterRadius}
        strokeWidth={strokeWidths.sm}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* inner nucleus */}
      <circle
        r={0.435 * nodeOuterRadius}
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
