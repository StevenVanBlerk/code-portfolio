"use client"; // TO-DO: refactor framer-motion implementation to not require client-side rendering
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  width?: number;
  outerSquareTransitionDuration?: number;
  innerSquareTransitionDuration?: number;
  innerSquareRotationCount?: number;
  stroke?: string;
  strokeWidthFactor?: number;
};

const LoadingSpinner = ({
  width = 50,
  outerSquareTransitionDuration = 3,
  innerSquareTransitionDuration = 3,
  innerSquareRotationCount = 2,
  stroke = "#fff",
  strokeWidthFactor = 30,
}: LoadingSpinnerProps) => {
  const frameWidth = width;
  const strokeWidth = frameWidth / strokeWidthFactor;
  const outerSquareWidth = Math.sqrt(0.5) * frameWidth - strokeWidth;
  const outerXAndY = frameWidth / 2 - outerSquareWidth / 2;
  const innerSquareWidth = Math.sqrt(0.5) * outerSquareWidth - strokeWidth;
  const innerXAndY = outerXAndY + outerSquareWidth / 2 - innerSquareWidth / 2;

  return (
    <svg
      className="overflow-visible" // allowing circle bounce animation to spill out of svg frame
      width={frameWidth}
      height={frameWidth}
    >
      <motion.rect
        width={outerSquareWidth}
        height={outerSquareWidth}
        x={outerXAndY}
        y={outerXAndY}
        fill="transparent"
        stroke={stroke}
        strokeWidth={strokeWidth}
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: -360 }}
        transition={{
          repeat: Infinity,
          duration: outerSquareTransitionDuration,
          ease: "linear",
        }}
      />

      <motion.rect
        width={innerSquareWidth}
        height={innerSquareWidth}
        x={innerXAndY}
        y={innerXAndY}
        fill="transparent"
        stroke={stroke}
        strokeWidth={strokeWidth}
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: innerSquareRotationCount * 360 }}
        transition={{
          repeat: Infinity,
          duration: innerSquareTransitionDuration,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export default LoadingSpinner;
