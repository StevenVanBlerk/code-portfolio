import React, { createContext } from "react";
import { ContextData, GlobalValuesContextProviderProps } from "./_types";

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

const rowCountSidebar = 7;
const columnCountSidebar = 5;
const gridGapSizeSideBar = 130;

const sideBarPreset: ContextData = {
  canvasHeight: rowCountSidebar * gridGapSizeSideBar,
  canvasWidth: columnCountSidebar * gridGapSizeSideBar,
  canvasMargin: 25,
  rowCount: rowCountSidebar,
  columnCount: columnCountSidebar,
  gridGapSize: gridGapSizeSideBar,
  isBackgroundGridDisplayed: false,
  areNodesDisplayed: false,
  areConnectionPathsDisplayed: true,
  AreNodesSynchronised: false,
  stepCount: 20,
  stepDuration: 3,
  nodeCount: 20,
  nodeMaxDisplacement: 3,
  nodeRadiusMultiplier: 3, //2,
  connectionMinLength: 0 * gridGapSize,
  connectionMaxLength: 3.5 * gridGapSize,
  BackgroundGridColour: "red",
  isPlaying: false,
};

const initialValues: ContextData =
  // noNodesDisplayedPreset,
  // allElementsDisplayedPreset,
  sideBarPreset;
export const GlobalValuesContext = createContext<ContextData>(initialValues);

export const GlobalValuesContextProvider = ({
  children,
}: GlobalValuesContextProviderProps) => {
  return (
    <GlobalValuesContext.Provider value={initialValues}>
      {children}
    </GlobalValuesContext.Provider>
  );
};
