"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering

import { useContext } from "react";
import Illustrator from "./Illustrator";
import {
  GlobalValuesContext,
  GlobalValuesContextProvider,
} from "./helpers/globalValues/globalValues";
import useDirector from "./hooks/usePositionDirector/useDirector";

const Blueprint = () => {
  const globalValues = useContext(GlobalValuesContext);
  const { columnCount, rowCount, nodeCount, stepCount, nodeMaxDisplacement } =
    globalValues;

  const director = useDirector({
    columnCount: columnCount,
    rowCount: rowCount,
    nodeCount: nodeCount,
    stepCount: stepCount,
    nodeMaxDisplacement: nodeMaxDisplacement,
  });

  return <Illustrator director={director} />;
};

const GenerativeBlueprint = () => {
  return (
    <GlobalValuesContextProvider>
      <Blueprint />
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
 * - transition colour instead of using opacity: 0.7?
 * - set initialDelay to true when AreNodesSynchronised=true
 * - there is a connection path bug. Opacity seems to sometimes suddenly shift causing lines to rapidly appear/disappear.
 *    - Maybe switching to a transition of colour (white to black) instead of opacity will fix this. Low opacity values can be inconsistent.
 *    - Might be more severe when nodes are displayed, suggesting it could be a performance limitation.
 *    - Rendering a small node count (where performance is good) has this bug severely. This is a weird bug. Maybe a delay issue
 * POSSIBLE ADDITIONS:
 * - create a light mode dark mode switch. Nodes and background swap colors on click
 *
 *
 * BACKGROUND THOUGHT:
 * - If the animation is always made to spill over 1 grid gap, resizing the viewport will not be as noticeable
 * - The animation still looks great when displaying connection lines but not nodes. Set maxPathLength to a high value (3~4)
 */
