import { TextButton } from "@/designSystem";
import { motion } from "framer-motion";
import { ExtendedRef } from "../types";

type ItemProps = { extendedRef: ExtendedRef; label: string; itemCount: number };

const Item = ({ extendedRef, label, itemCount }: ItemProps) => {
  const itemEmphasisFactor = itemCount - extendedRef.distanceFromView; // inverse of distanceFromView. Low distance = high emphasis

  const circleMinRadius = 2;
  const circleMaxRadius = 15;
  const maxDeltaCircleRadius = circleMaxRadius - circleMinRadius;

  const circleRadiusIncrement = maxDeltaCircleRadius / itemCount;
  const circlePotentialRadius = itemEmphasisFactor * circleRadiusIncrement;
  const circleRadius =
    circlePotentialRadius < circleMinRadius
      ? circleMinRadius
      : circlePotentialRadius > circleMaxRadius
        ? circleMaxRadius
        : circlePotentialRadius;

  const svgFrameWidth = circleMaxRadius * 2 + 2;

  const circleMinStrokeWidth = 0.3;
  const circleMaxStrokeWidth = 2;
  const maxDeltaCircleStrokeWidth = circleMaxStrokeWidth - circleMinStrokeWidth;
  const circleStrokeWidthIncrement = maxDeltaCircleStrokeWidth / itemCount;
  const circlePotentialStrokeWidth =
    itemEmphasisFactor * circleStrokeWidthIncrement;
  const circleStrokeWidth =
    circlePotentialStrokeWidth < circleMinStrokeWidth
      ? circleMinStrokeWidth
      : circlePotentialStrokeWidth > circleMaxStrokeWidth
        ? circleMaxStrokeWidth
        : circlePotentialStrokeWidth;

  const fontWeights = [100, 200, 600];
  const fontWeight = extendedRef.isInView
    ? fontWeights[2]
    : extendedRef.isNeighbourInView
      ? fontWeights[1]
      : fontWeights[0];

  return (
    <li>
      <TextButton
        as={motion.button}
        initial={{ fontWeight: 100 }}
        animate={{ fontWeight }}
        onClick={() => {
          extendedRef.ref.current?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "center",
          });
        }}
      >
        <div className="flex">
          <svg
            className="overflow-visible" // allowing circle bounce animation to spill out of svg frame
            width={svgFrameWidth}
            height={svgFrameWidth}
          >
            <motion.circle
              stroke="#fff"
              fill="transparent"
              cx="50%"
              cy="50%"
              initial={{ r: circleRadius, strokeWidth: circleStrokeWidth }}
              animate={{
                r: circleRadius,
                strokeWidth: circleStrokeWidth,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
            />
          </svg>
          {label}
        </div>
      </TextButton>
    </li>
  );
};

export default Item;
