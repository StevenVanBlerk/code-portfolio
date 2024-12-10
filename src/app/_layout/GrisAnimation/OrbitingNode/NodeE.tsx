import Circle from "../Circle";
import { StrokeWidths } from "../useGrisHandler/buildPercentageBasedDimensions";
import { motion } from "framer-motion";

type NodeEProps = {
  orbitalRadius: number;
  nodeOuterRadius: number;
  strokeWidths: StrokeWidths;
  nodeRotationalPeriod: number;
  color?: string;
};

const NodeE = ({
  nodeOuterRadius,
  strokeWidths,
  nodeRotationalPeriod,
  color = "#fff",
}: NodeEProps) => {
  const miniNodeRadius = 0.19 * nodeOuterRadius;
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

      {/* inner dotted ring */}
      <Circle
        radius={0.55 * nodeOuterRadius}
        strokeWidth={strokeWidths.xs}
        strokeStyle="dotted"
        rotationalPeriod={7}
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
        animate={{
          rotate: 360,
        }}
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
          {/* mini ring */}
          <circle
            r={miniNodeRadius}
            strokeWidth={strokeWidths.xs}
            stroke={color}
            fill="transparent"
            cx="50%"
            cy="50%"
          />
          {/* mini nucleus */}
          <circle
            r={0.5 * miniNodeRadius}
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

export default NodeE;
