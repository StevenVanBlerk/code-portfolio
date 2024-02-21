"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering

import { useContext } from "react";
import Illustrator from "./Illustrator";
import {
  GlobalValuesContext,
  GlobalValuesContextProvider,
} from "./helpers/globalValues/globalValues";
import useDirector from "./hooks/usePositionDirector/useDirector";
import { ContextData } from "./helpers/globalValues/_types";

const Blueprint = () => {
  const globalValues = useContext(GlobalValuesContext);
  const { columnCount, rowCount, nodeCount, stepCount, nodeMaxDisplacement } =
    globalValues as ContextData;

  const director = useDirector({
    columnCount: columnCount,
    rowCount: rowCount,
    nodeCount: nodeCount,
    stepCount: stepCount,
    nodeMaxDisplacement: nodeMaxDisplacement,
  });

  return (
    <div style={{ opacity: 0.7 }}>
      <Illustrator director={director} />
    </div>
  );
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
 *
 * POSSIBLE ADDITION:
 * - create an opacity filter over the whole animation, then create a "no filter" effect around the mouse cursor. Animation will be grey far from cursor, and white at cursor
 *
 * BACKGROUND THOUGHT:
 * - If the animation is always made to spill over 1 grid gap, resizing the viewport will not be as noticable
 * - The animation still looks great when displaying connection lines but not nodes. Set maxPathLength to a high value (3~4)
 */
