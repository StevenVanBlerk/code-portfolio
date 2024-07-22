import Item from "./Item";
import { ExtendedRef } from "./types";

type ScrollProgressSidebarProps = { extendedRefs: ExtendedRef[] };

// TO-DO: make sidebar component generic and move it to DesignSystem
const ScrollProgressSidebar = ({
  extendedRefs,
}: ScrollProgressSidebarProps) => {
  const [ref0, ref1, ref2, ref3, ref4, ref5] = extendedRefs;

  return (
    <nav className="fixed top-1/2 w-full -translate-y-1/2">
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
          label="Cypress"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref3}
          label="Storybook"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref4}
          label="This portfolio"
          itemCount={extendedRefs.length}
        />
        <Item
          extendedRef={ref5}
          label="My previous portfolio"
          itemCount={extendedRefs.length}
        />
      </ul>
    </nav>
  );
};

export default ScrollProgressSidebar;
