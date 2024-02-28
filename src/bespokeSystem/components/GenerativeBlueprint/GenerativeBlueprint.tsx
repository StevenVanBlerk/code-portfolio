"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering

import { useContext, useEffect } from "react";
import Illustrator from "./Illustrator";
import {
  GlobalValuesContext,
  GlobalValuesContextProvider,
} from "./helpers/globalValues/globalValues";
import useDirector from "./hooks/usePositionDirector/useDirector";
import { ContextData } from "./helpers/globalValues/_types"; //TO-DO: move and rename type

const Blueprint = ({ preset }: { preset: ContextData }) => {
  const globalValues = useContext(GlobalValuesContext);
  const {
    columnCount,
    rowCount,
    nodeCount,
    stepCount,
    nodeMaxDisplacement,
    initialisePreset,
  } = globalValues;

  useEffect(() => {
    initialisePreset(preset);
  }, [preset]);

  const director = useDirector({
    columnCount: columnCount,
    rowCount: rowCount,
    nodeCount: nodeCount,
    stepCount: stepCount,
    nodeMaxDisplacement: nodeMaxDisplacement,
  });

  return <Illustrator director={director} />;
};

const GenerativeBlueprint = ({ preset }: { preset: ContextData }) => {
  return (
    <GlobalValuesContextProvider>
      <Blueprint preset={preset} />
    </GlobalValuesContextProvider>
  );
};

export default GenerativeBlueprint;
/**SIGN OFF NOTES:
 * Next to do is just polish.
 * - refactor styles into classes (use tailwind)
 * - improve performance by debouncing/memoizing things
 * - define return types
 * - populate ./README.md
 * - Add TSDoc to important types
 * - Add play / pause button
 * - transition colour instead of opacity?
 * - set initialDelay to 0 when AreNodesSynchronised=true
 * - there is a connection path bug. Opacity seems to sometimes suddenly change causing lines to rapidly appear/disappear.
 *    - Maybe switching to a transition of colour (white to black) instead of opacity will fix this. Low opacity values can be inconsistent. (tests indicate this probably won't work)
 *    - Might be more severe when nodes are displayed, suggesting it could be a performance limitation.
 *    - Rendering a small node count (where performance is good) has this bug severely. This is a weird bug. Maybe a delay issue
 * POSSIBLE ADDITIONS:
 * - create a light mode dark mode switch. Nodes and background swap colors on click
 */
