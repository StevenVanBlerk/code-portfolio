"use client";

import Circle from "./Circle";
import OrbitingNode from "./OrbitingNode/OrbitingNode";
import Square from "./Square";
import useGrisHandler from "./useGrisHandler";

const GrisAnimation = () => {
  const { isLoading, canvasWidth, backgroundCircles, backgroundSquares } =
    useGrisHandler();
  if (isLoading) return;

  return (
    <svg
      width={canvasWidth}
      height={canvasWidth}
      viewBox={`0 0 ${canvasWidth} ${canvasWidth}`}
      className="pointer-events-none block"
    >
      {backgroundSquares.map(
        ({ width, height, strokeWidth, isRotated }, index) => (
          <Square
            key={`${index}-${canvasWidth}`} // including canvasWidth ensures a reset of position calculations when canvasWidth changes
            canvasWidth={canvasWidth}
            width={width}
            height={height}
            strokeWidth={strokeWidth}
            isRotated={isRotated}
          />
        ),
      )}

      {backgroundCircles.map((backgroundCircle, index) => {
        const { orbitingNode } = backgroundCircle;

        return (
          <g
            key={`${index}-${canvasWidth}`} // including canvasWidth ensures a reset of position calculations when canvasWidth changes
          >
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
