import { motion } from "framer-motion";

type CircleProps = {
  strokeWidth: number;
  radius: number;
  strokeColor?: string;
  fillColor?: string;
  strokeStyle?: "solid" | "dotted";
  rotationalPeriod?: number;
  rotationalDirection?: "clockwise" | "counter-clockwise";
};
const Circle = ({
  strokeWidth,
  radius,
  strokeColor = "#fff",
  fillColor = "transparent",
  strokeStyle = "solid",
  rotationalPeriod = 0,
  rotationalDirection = "clockwise",
}: CircleProps) => {
  const dotWidth = strokeWidth;
  const distanceBetweenDots = strokeWidth * 4;
  const strokeDashArray =
    strokeStyle === "solid" ? undefined : `${dotWidth},${distanceBetweenDots}`;

  if (rotationalPeriod) {
    return (
      <motion.circle
        strokeWidth={strokeWidth}
        stroke={strokeColor}
        fill={fillColor}
        r={radius}
        cx="50%"
        cy="50%"
        strokeDasharray={strokeDashArray}
        animate={{ rotate: rotationalDirection === "clockwise" ? 360 : -360 }}
        transition={{
          repeat: Infinity,
          duration: rotationalPeriod,
          ease: "linear",
        }}
      />
    );
  }
  return (
    <circle
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill={fillColor}
      r={radius}
      cx="50%"
      cy="50%"
      strokeDasharray={strokeDashArray}
    />
  );
};

export default Circle;
