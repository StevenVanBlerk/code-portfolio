import Item from "./Item";
import { ExtendedRef } from "./types";

type ScrollProgressSidebarProps = { extendedRefs: ExtendedRef[] };

// TO-DO: make sidebar component generic and move it to DesignSystem
// TO-DO: create provider and consumer / redux slice for handling extendedRefs
const ScrollProgressSidebar = ({
  extendedRefs,
}: ScrollProgressSidebarProps) => {
  const [ref0, ref1, ref2, ref3, ref4, ref5, ref6] = extendedRefs;

  return (
    <nav className="fixed top-1/2 w-fit -translate-y-1/2">
      <ul className="grid w-fit gap-3">
        <Item
          extendedRef={ref0}
          label="Emotion wheel"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref1}
          label="To-do list"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref2}
          label="Storybook"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref3}
          label="Cypress"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref4}
          label="Penpot"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref5}
          label="This portfolio"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref6}
          label="The previous portfolio"
          itemCount={extendedRefs.length}
        />
      </ul>
    </nav>
  );
};

export default ScrollProgressSidebar;
