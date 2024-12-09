import { StrokeWidths } from "../useGrisHandler/buildPercentageBasedDimensions";
import { motion } from "framer-motion";

type NodeCProps = {
  orbitalRadius: number;
  nodeOuterRadius: number;
  strokeWidths: StrokeWidths;
  nodeRotationalPeriod: number;
  color?: string;
};

const NodeC = ({
  nodeOuterRadius,
  strokeWidths,
  nodeRotationalPeriod,
  color = "#fff",
}: NodeCProps) => {
  const miniNodeRadius = 0.17 * nodeOuterRadius;
  const miniNodeOrbitalPeriod = nodeRotationalPeriod;
  return (
    <g>
      {/* static ring containing an orbiting mini node */}
      <circle
        r={nodeOuterRadius}
        strokeWidth={strokeWidths.sm}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* inner rings */}
      <circle
        r={0.63 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      <circle
        r={0.57 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        stroke={color}
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      {/* nucleus */}
      <circle
        r={0.42 * nodeOuterRadius}
        strokeWidth={0}
        fill={color}
        cx="50%"
        cy="50%"
      />

      {/* orbiting mini node */}
      <motion.g
        initial={{
          rotate: 0,
        }}
        animate={
          {
              rotate: 360,
          }
        }
        transition={{
          repeat: Infinity,
          duration: miniNodeOrbitalPeriod,
          ease: "linear",
        }}
      >
        {/* invisible circle that sets the parent <g/> dimensions */}
        <circle
          r={miniNodeRadius + nodeOuterRadius}
          strokeWidth={0}
          stroke="transparent"
          fill="transparent"
          cx="50%"
          cy="50%"
        />
        <g style={{ transform: `translateX(${nodeOuterRadius}px)` }}>
          <circle
            r={miniNodeRadius}
            strokeWidth={0}
            fill={color}
            cx="50%"
            cy="50%"
          />
        </g>
      </motion.g>
    </g>
  );
};

export default NodeC;
