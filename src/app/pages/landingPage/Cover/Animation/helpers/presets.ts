// Values of this file are not currently used. These are useful presets that could be made available to the user

import { ContextData } from "@/bespokeSystem/components/GenerativeBlueprint/helpers/globalValues/_types";

const rowCount = 10;
const columnCount = 20;
const gridGapSize = 60;

// settings for debugging nodes/lines delay bugs
// const rowCount = 5; //10;
// const columnCount = 10; //20;
// const gridGapSize = 120; //60;

const allElementsDisplayedPreset: ContextData = {
  canvasHeight: rowCount * gridGapSize,
  canvasWidth: columnCount * gridGapSize,
  canvasMargin: 25,
  columnCount: 10,
  rowCount: 20,
  gridGapSize: 60,
  isBackgroundGridDisplayed: true,
  areNodesDisplayed: true,
  areConnectionPathsDisplayed: true,
  AreNodesSynchronised: false,
  stepCount: 10,
  stepDuration: 3,
  nodeCount: 20,
  nodeMaxDisplacement: 3,
  nodeRadiusMultiplier: 3,
  connectionMinLength: 0.5 * gridGapSize,
  connectionMaxLength: 2.5 * gridGapSize,
  BackgroundGridColour: "red",
  isPlaying: true,
};

const noNodesDisplayedPreset: ContextData = {
  canvasHeight: rowCount * gridGapSize,
  canvasWidth: columnCount * gridGapSize,
  canvasMargin: 25,
  columnCount,
  rowCount,
  gridGapSize,
  isBackgroundGridDisplayed: true,
  areNodesDisplayed: false,
  areConnectionPathsDisplayed: true,
  AreNodesSynchronised: false,
  stepCount: 10,
  stepDuration: 3,
  nodeCount: 30,
  nodeMaxDisplacement: 3,
  nodeRadiusMultiplier: 3,
  connectionMinLength: 0 * gridGapSize,
  connectionMaxLength: 3.5 * gridGapSize,
  BackgroundGridColour: "red",
  isPlaying: true,
};
