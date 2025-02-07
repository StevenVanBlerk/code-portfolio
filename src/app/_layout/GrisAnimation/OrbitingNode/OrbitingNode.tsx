import { motion } from "framer-motion";
import { OrbitingNodeProps } from "../../types";
import NodeA from "./NodeA";
import NodeB from "./NodeB";
import NodeC from "./NodeC";
import NodeCursor from "./NodeCursor";
import NodeD from "./NodeD";
import NodeE from "./NodeE";

const OrbitingNode = ({
  nodeType,
  nodeOuterRadius,
  orbitalRadius,
  orbitalPeriod,
  strokeWidths,
  nodeRotationalPeriod = 0,
  initialOrbitPosition = 0,
  color = "#fff",
}: OrbitingNodeProps) => {
  return (
    <motion.g
      initial={{
        rotate: initialOrbitPosition,
      }}
      animate={{
        rotate: initialOrbitPosition + 360,
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
        {nodeType === "CURSOR" ? (
          <NodeCursor
            nodeOuterRadius={nodeOuterRadius}
            strokeWidths={strokeWidths}
            color={color}
          />
        ) : nodeType === "A" ? (
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
        ) : nodeType === "C" ? (
          <NodeC
            orbitalRadius={orbitalRadius}
            nodeOuterRadius={nodeOuterRadius}
            strokeWidths={strokeWidths}
            color={color}
            nodeRotationalPeriod={nodeRotationalPeriod}
          />
        ) : nodeType === "D" ? (
          <NodeD
            nodeOuterRadius={nodeOuterRadius}
            strokeWidths={strokeWidths}
            color={color}
          />
        ) : nodeType === "E" ? (
          <NodeE
            orbitalRadius={orbitalRadius}
            nodeOuterRadius={nodeOuterRadius}
            strokeWidths={strokeWidths}
            color={color}
            nodeRotationalPeriod={nodeRotationalPeriod}
          />
        ) : null}
      </g>
    </motion.g>
  );
};

export default OrbitingNode;
