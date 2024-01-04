"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering
import Blueprint from "./Blueprint";
import SVGFrame from "./SVGFrame";
import usePositionDirector from "./helpers/usePositionDirector";

const BlueprintGridAnimation = () => {
  const positionDirector = usePositionDirector({ columnCount: 3, rowCount: 3 });

  return (
    <div style={{ width: "fit-content" }}>
      <SVGFrame>
        {({ canvasWidth, canvasHeight }: any) => (
          <Blueprint
            positionDirector={positionDirector}
            gridGapSize={100}
            canvasWidth={canvasWidth}
            canvasHeight={canvasHeight}
          />
        )}
      </SVGFrame>
    </div>
  );
};

export default BlueprintGridAnimation;
