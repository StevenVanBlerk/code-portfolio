/** framer-motion and SSR notes:
 * framer-motion seems to only use CSR when using variants (to be confirmed).
 * Having some components use in line animation seems to conflict if others are using variants to describe animation.
 * Moving to SSR might be possible if I replace these variants with in line props
 */

const stepDuration = 2;

// TO-DO: create a more elastic transition
const getCommonTransition = (sequenceDuration: number) => ({
  ease: "easeInOut",
  duration: sequenceDuration,
  repeat: Infinity,
  repeatType: "reverse",
});

/**"delay bug" notes:
 * When nodes have an individual delay, the connecting lines animate before the nodes move. Lines have to worry about 2 separate delays (each node), making this a tough fix.
 * A potential fix would be to add a 2nd "animate" state to lines where "AnimateA" animates x1,y1 changes and "AnimateB" animates x2,y2
 */
export const animateNode = {
  animate: ({
    sequence,
    gridGapSize,
    radiusMultiplier,
    isNucleus = false,
  }: any) => {
    const initialDelay = 0; //sequence[0].initialDelay; // disabled until delay bug is fixed, see bug notes above
    const cxSequence = sequence.map((step: any) => step.x * gridGapSize);
    const cySequence = sequence.map((step: any) => step.y * gridGapSize);
    const rSequence = sequence.map((step: any) => {
      return step.r * radiusMultiplier;
    });
    const sequenceDuration = stepDuration * sequence.length;
    const commonTransition = getCommonTransition(sequenceDuration);
    const basicTransitionWithDelay = {
      ...commonTransition,
      delay: initialDelay,
    };
    return {
      cx: cxSequence,
      cy: cySequence,
      r: isNucleus ? undefined : rSequence,
      transition: {
        cx: basicTransitionWithDelay,
        cy: basicTransitionWithDelay,
        r: isNucleus ? undefined : basicTransitionWithDelay,
      },
    };
  },
};

const normaliseOpacity = (pathLength: number) => {
  // Ensure opacity is between 0 and 1
  return Math.max(0, 1 - pathLength / 2);
};

export const animateNodeConnection = {
  animate: ({ sequence, gridGapSize }: any) => {
    const x1Sequence = sequence.map((step: any) => step.x1 * gridGapSize);
    const y1Sequence = sequence.map((step: any) => step.y1 * gridGapSize);
    const x2Sequence = sequence.map((step: any) => step.x2 * gridGapSize);
    const y2Sequence = sequence.map((step: any) => step.y2 * gridGapSize);
    const opacitySequence = sequence.map((step: any) =>
      normaliseOpacity(step.pathLength)
    );

    const sequenceDuration = stepDuration * sequence.length;
    const commonTransition = getCommonTransition(sequenceDuration);
    return {
      x1: x1Sequence,
      y1: y1Sequence,
      x2: x2Sequence,
      y2: y2Sequence,
      opacity: opacitySequence,
      transition: {
        x1: commonTransition,
        y1: commonTransition,
        x2: commonTransition,
        y2: commonTransition,
        opacity: commonTransition, //TO-DO: custom transition that only cares for short path lengths
      },
    };
  },
};
