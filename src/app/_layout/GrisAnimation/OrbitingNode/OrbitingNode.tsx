import { motion } from "framer-motion";
import { StrokeWidths } from "../useGrisHandler/buildPercentageBasedDimensions";
import NodeA from "./NodeA";
import NodeB from "./NodeB";

export type OrbitingNode = {
  nodeType: "A" | "B" | "C" | "D" | "E";
  nodeOuterRadius: number;
  orbitalRadius: number;
  orbitalPeriod: number;
  strokeWidths: StrokeWidths;
  nodeRotationalPeriod?: number;
  nodeRotationalDirection?: "clockwise" | "counter-clockwise";
  color?: string;
};

const OrbitingNode = ({
  nodeType,
  nodeOuterRadius,
  orbitalRadius,
  orbitalPeriod,
  strokeWidths,
  nodeRotationalPeriod,
  nodeRotationalDirection,
  color = "#fff",
}: OrbitingNode) => {
  return (
    <motion.g
      initial={{
        rotate: 0,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: orbitalPeriod,
        ease: "linear",
      }}
    >
      {/* invisible circle that sets the parent <g/> dimensions */}
      <circle
        r={orbitalRadius + nodeOuterRadius}
        strokeWidth={0}
        stroke="transparent"
        fill="transparent"
        cx="50%"
        cy="50%"
      />
      <g style={{ transform: `translateX(${orbitalRadius}px)` }}>
        {nodeType === "A" ? (
          <NodeA
            nodeOuterRadius={nodeOuterRadius}
            strokeWidths={strokeWidths}
            color={color}
          />
        ) : nodeType === "B" ? (
          <NodeB
            nodeOuterRadius={nodeOuterRadius}
            strokeWidths={strokeWidths}
            color={color}
          />
        ) : null}
      </g>
    </motion.g>
  );
};

export default OrbitingNode;
