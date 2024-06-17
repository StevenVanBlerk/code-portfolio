"use client";
import useWindowDimensions from "@/designSystem/utilities/useWindowDimensions";
import MorphingQuads from "@/bespokeSystem/components/animations/MorphingQuads";
import { useEffect } from "react";

const MorphingQuadsAnimation = () => {
  const { windowDimensions, invalidateWindowDimensions } =
    useWindowDimensions();

  useEffect(() => {
    invalidateWindowDimensions();
  }, []);

  if (!windowDimensions.height || !windowDimensions.width) return;

  const canvasMargin = 0;
  const canvasHeight = windowDimensions.height - canvasMargin - canvasMargin; //accounting for margin on either side
  const canvasWidth = windowDimensions.width;
  return (
    <div className="absolute overflow-hidden">
      <MorphingQuads
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
        isOverflowing={true}
        // does not overlap Copy
        // canvasHeight={622.67}
        // canvasWidth={850}
        columnCount={8}
        // isAnimated={false}
        animationOrigin="bottom-left"
        // isInteractive={false}
        isInitialisedExpanded={false}
        // isInDebugMode={true}
        transitionProps={{ frequency: 6000, transitionDuration: 1 }}
        styleProps={{
          gap: 8,
          scaleFactor: 6,
          rotationCount: 1,
          fill: "#555",
          borderRadius: 3,
        }}
      />
    </div>
  );
};

export default MorphingQuadsAnimation;
