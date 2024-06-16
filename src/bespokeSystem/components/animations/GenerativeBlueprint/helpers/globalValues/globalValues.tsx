import React, { createContext, useState } from "react";
import {
  ContextData,
  ContextDataAndInitialisers,
  GlobalValuesContextProviderProps,
} from "./_types";

const uninitialisedPreset = {
  canvasWidth: 0,
  canvasHeight: 0,
  canvasMargin: 0,
  rowCount: 0,
  columnCount: 0,
  gridGapSize: 0,
  isBackgroundGridDisplayed: false,
  areNodesDisplayed: false,
  areConnectionPathsDisplayed: false,
  AreNodesSynchronised: false,
  stepCount: 0,
  stepDuration: 0,
  nodeCount: 0,
  nodeMaxDisplacement: 0,
  nodeRadiusMultiplier: 0,
  connectionMinLength: 0,
  connectionMaxLength: 0,
  BackgroundGridColour: "#fff",
  isPlaying: false,
  initialisePreset: () => {},
};

export const GlobalValuesContext =
  createContext<ContextDataAndInitialisers>(uninitialisedPreset);

export const GlobalValuesContextProvider = ({
  children,
}: GlobalValuesContextProviderProps) => {
  const [preset, setPreset] = useState<ContextData>(uninitialisedPreset);
  const initialisePreset = (preset: ContextData) => {
    setPreset(preset);
  };
  const value = { ...preset, initialisePreset } as ContextDataAndInitialisers;
  return (
    <GlobalValuesContext.Provider value={value}>
      {children}
    </GlobalValuesContext.Provider>
  );
};
