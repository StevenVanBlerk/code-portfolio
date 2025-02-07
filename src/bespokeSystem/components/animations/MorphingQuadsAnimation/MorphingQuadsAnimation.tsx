"use client";
import useWindowDimensions from "src/designSystem/utilities/useWindowDimensions";
import MorphingQuads from "src/bespokeSystem/components/animations/MorphingQuads";

const MorphingQuadsAnimation = () => {
  const { windowDimensions } = useWindowDimensions();

  if (!windowDimensions.height || !windowDimensions.width) return;

  const canvasMargin = 0;
  const canvasHeight = windowDimensions.height - canvasMargin - canvasMargin; //accounting for margin on either side
  const canvasWidth = windowDimensions.width;
  return (
    <div className="fixed overflow-hidden">
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
        transitionProps={{ frequency: 9000, transitionDuration: 1 }}
        styleProps={{
          gap: 8,
          scaleFactor: 6,
          rotationCount: 1,
          fill: "#333333",
          borderRadius: 3,
        }}
      />
    </div>
  );
};

export default MorphingQuadsAnimation;
