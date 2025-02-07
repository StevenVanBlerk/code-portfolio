import Circle from "../Circle";
import { StrokeWidths } from "../../types";

type NodeDProps = {
  nodeOuterRadius: number;
  strokeWidths: StrokeWidths;
  color?: string;
};

const NodeD = ({
  nodeOuterRadius,
  strokeWidths,
  color = "#fff",
}: NodeDProps) => {
  return (
    <g>
      {/* outer dotted ring */}
      <Circle
        radius={nodeOuterRadius}
        strokeWidth={strokeWidths.sm}
        strokeStyle="dotted"
        rotationalPeriod={7}
      />

      {/* inner rings */}
      <circle
        r={0.85 * nodeOuterRadius}
        strokeWidth={strokeWidths.sm}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      <circle
        r={0.7 * nodeOuterRadius}
        strokeWidth={strokeWidths.sm}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* nucleus */}
      <circle
        r={0.2 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill={color}
        cx="50%"
        cy="50%"
      />
    </g>
  );
};

export default NodeD;
