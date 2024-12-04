"use client";

import Circle from "./Circle";
import OrbitingNode from "./OrbitingNode/OrbitingNode";
import useGrisHandler from "./useGrisHandler";

const GrisAnimation = () => {
  const { isLoading, canvasWidth, backgroundCircles, backgroundSquares } =
    useGrisHandler();
  if (isLoading) return;

  return (
    <svg
      width={canvasWidth}
      height={canvasWidth}
      className="pointer-events-none block"
    >
      {backgroundSquares.map(
        ({ x, y, width, height, strokeWidth, transform }, index) => {
          const dotWidth = strokeWidth;
          const distanceBetweenDots = strokeWidth * 4;
          const strokeDashArray = `${dotWidth},${distanceBetweenDots}`;

          return (
            <rect
              key={index}
              x={x - width / 2}
              y={y - height / 2}
              width={width}
              height={height}
              strokeWidth={strokeWidth}
              transform={transform}
              strokeDasharray={strokeDashArray}
              stroke="#fff"
              fill="transparent"
            />
          );
        },
      )}
      {backgroundCircles.map((backgroundCircle, index) => {
        const { orbitingNode } = backgroundCircle;

        return (
          <g key={index}>
            <Circle
              radius={backgroundCircle.diameter / 2}
              strokeWidth={backgroundCircle.strokeWidth}
              strokeStyle={backgroundCircle.strokeStyle}
              rotationalPeriod={backgroundCircle.rotationalPeriod}
              rotationalDirection={backgroundCircle.rotationalDirection}
            />
            {orbitingNode && (
              <OrbitingNode
                nodeType={orbitingNode.nodeType}
                nodeOuterRadius={orbitingNode.nodeOuterRadius}
                orbitalRadius={backgroundCircle.diameter / 2}
                orbitalPeriod={orbitingNode.orbitalPeriod}
                strokeWidths={orbitingNode.strokeWidths}
                nodeRotationalPeriod={orbitingNode.nodeRotationalPeriod}
                nodeRotationalDirection={orbitingNode.nodeRotationalDirection}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default GrisAnimation;
