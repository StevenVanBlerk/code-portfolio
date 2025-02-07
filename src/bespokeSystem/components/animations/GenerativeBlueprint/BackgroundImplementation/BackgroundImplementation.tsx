"use client";

import GenerativeBlueprint from "src/bespokeSystem/components/animations/GenerativeBlueprint";
import useWindowDimensions from "../../../../../designSystem/utilities/useWindowDimensions";
import { useEffect } from "react";

const BackgroundImplementation = () => {
  const { windowDimensions, invalidateWindowDimensions } =
    useWindowDimensions();

  useEffect(() => {
    invalidateWindowDimensions();
  }, []);

  if (!windowDimensions.height || !windowDimensions.width) return;

  const canvasMargin = 13;
  const canvasHeight = windowDimensions.height - canvasMargin - canvasMargin; //accounting for margin on either side
  const canvasWidthMaximum = windowDimensions.width * 0.5;
  const rowCount = 8;
  const gridGapSize = canvasHeight / (rowCount - 1);

  const columnCountMaximum = 10;
  const potentialColumnCount = Math.ceil(canvasWidthMaximum / gridGapSize);
  const columnCount =
    potentialColumnCount <= columnCountMaximum
      ? potentialColumnCount
      : columnCountMaximum;
  const canvasWidth = (columnCount - 1) * gridGapSize; // column 0 is n-1 columns away from column n
  const backgroundPreset = {
    canvasWidth,
    canvasHeight,
    canvasMargin,
    rowCount,
    columnCount,
    gridGapSize,
    isBackgroundGridDisplayed: false,
    areNodesDisplayed: true,
    areConnectionPathsDisplayed: true,
    AreNodesSynchronised: false,
    stepCount: 12,
    stepDuration: 4,
    nodeCount: 20,
    nodeMaxDisplacement: 3,
    nodeRadiusMultiplier: 3,
    connectionMinLength: 0 * gridGapSize,
    connectionMaxLength: 2 * gridGapSize,
    BackgroundGridColour: "blue",
    isPlaying: true,
  };

  return (
    <div className="justify-self-end">
      <GenerativeBlueprint preset={backgroundPreset} />
    </div>
  );
};

export default BackgroundImplementation;
