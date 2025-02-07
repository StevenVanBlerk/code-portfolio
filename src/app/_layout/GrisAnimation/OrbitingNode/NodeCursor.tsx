import Circle from "../Circle";
import { StrokeWidths } from "../../types";

type NodeCursorProps = {
  nodeOuterRadius: number;
  strokeWidths: StrokeWidths;
  color?: string;
};

const NodeCursor = ({
  nodeOuterRadius,
  strokeWidths,
  color = "#fff",
}: NodeCursorProps) => {
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
        r={0.9 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      <circle
        r={0.8 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      <circle
        r={0.7 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* nucleus */}
      <circle
        r={0.28 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill={color}
        cx="50%"
        cy="50%"
      />
    </g>
  );
};

export default NodeCursor;
