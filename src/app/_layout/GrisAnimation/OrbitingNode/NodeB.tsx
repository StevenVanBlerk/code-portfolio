import { StrokeWidths } from "../useGrisHandler/buildPercentageBasedDimensions";

type NodeBProps = {
  nodeOuterRadius: number;
  strokeWidths: StrokeWidths;
  color?: string;
};

const NodeB = ({
  nodeOuterRadius,
  strokeWidths,
  color = "#fff",
}: NodeBProps) => {
  return (
    <g>
      {/* outermost ring */}
      <circle
        r={nodeOuterRadius}
        strokeWidth={strokeWidths.xxs}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* inner ring */}
      <circle
        r={0.77 * nodeOuterRadius}
        strokeWidth={strokeWidths.xxs}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* inner nucleus */}
      <circle
        r={0.25 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill={color}
        cx="50%"
        cy="50%"
      />
    </g>
  );
};

export default NodeB;
