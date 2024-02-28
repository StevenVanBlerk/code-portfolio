import { ContextData } from "../globalValues/_types";

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

const columnCountSidebar = 5;
const rowCountSidebar = 7;
const gridGapSizeSideBar = 120;

export const sideBarPreset: ContextData = {
  canvasWidth: (columnCountSidebar - 1) * gridGapSizeSideBar, // column 0 is n-1 columns away from column n
  canvasHeight: (rowCountSidebar - 1) * gridGapSizeSideBar,
  canvasMargin: 13,
  rowCount: rowCountSidebar,
  columnCount: columnCountSidebar,
  gridGapSize: gridGapSizeSideBar,
  isBackgroundGridDisplayed: false,
  areNodesDisplayed: true,
  areConnectionPathsDisplayed: false,
  AreNodesSynchronised: false,
  stepCount: 12,
  stepDuration: 3,
  nodeCount: 14,
  nodeMaxDisplacement: 3,
  nodeRadiusMultiplier: 3,
  connectionMinLength: 0 * gridGapSizeSideBar,
  connectionMaxLength: 3.5 * gridGapSizeSideBar,
  BackgroundGridColour: "blue",
  isPlaying: false,
};
