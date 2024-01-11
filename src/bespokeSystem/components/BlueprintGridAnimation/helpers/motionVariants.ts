/** framer-motion and SSR notes:
 * framer-motion seems to only use CSR when using variants (to be confirmed).
 * Having some components use in line animation seems to conflict if others are using variants to describe animation.
 * Moving to SSR might be possible if I replace these variants with in line props
 */

const stepDuration = 2;

// TO-DO: create a more elastic transition
const getCommonTransition = (sequenceDuration: number) => ({
  ease: "easeInOut", // https://www.framer.com/motion/easing-functions/
  duration: sequenceDuration,
  repeat: Infinity,
  repeatType: "reverse",
});

/**"delay bug" notes:
 * When nodes have an individual delay, the connecting lines animate before the nodes move. Lines have to worry about 2 separate delays (each node), making this a tough fix.
 * A potential fix would be to add a 2nd "animate" state to lines where "AnimateA" animates x1,y1 changes and "AnimateB" animates x2,y2
 */
export const animateNodeGroup = {
  animate: ({ sequence, gridGapSize }: any) => {
    // const initialDelay = 0; //sequence[0].initialDelay; // disabled until delay bug is fixed, see bug notes above
    const initialDelay = sequence[0].initialDelay;
    const cxSequence = sequence.map((step: any) => step.x * gridGapSize);
    const cySequence = sequence.map((step: any) => step.y * gridGapSize);
    const sequenceDuration = stepDuration * sequence.length;
    const commonTransition = getCommonTransition(sequenceDuration);
    const basicTransitionWithDelay = {
      ...commonTransition,
      delay: initialDelay,
    };
    return {
      x: cxSequence,
      y: cySequence,
      transition: {
        x: basicTransitionWithDelay,
        y: basicTransitionWithDelay,
      },
    };
  },
};

export const animateNodeRadius = {
  animate: ({ sequence, radiusMultiplier, isNucleus = false }: any) => {
    const initialDelay = 0; //sequence[0].initialDelay; // disabled until delay bug is fixed, see bug notes above

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
      r: rSequence,
      transition: {
        r: basicTransitionWithDelay,
      },
    };
  },
};

const normaliseOpacity = ({
  pathLength,
  connectionPathMaxLength, //gaps,
}: {
  pathLength: number;
  connectionPathMaxLength: number; //gaps,
}) => {
  // Ensure pathLength is within valid range
  pathLength = Math.max(0, Math.min(pathLength, connectionPathMaxLength));

  // Calculate opacity using linear interpolation
  let opacity = 1 - pathLength / connectionPathMaxLength;

  return Math.max(0, opacity);
};

export const animateNodeConnection = {
  animateA: ({ sequenceA, gridGapSize, connectionPathMaxLength }: any) => {
    const x1Sequence = sequenceA.map((step: any) => step.x * gridGapSize); //TO-DO ADD DELAY TO ANIMATEA and ANIMATEB
    const y1Sequence = sequenceA.map((step: any) => step.y * gridGapSize);
    const initialDelay = sequenceA[0].initialDelay;
    // const opacitySequence = sequenceA.map((step: any) =>
    //   normaliseOpacity({
    //     pathLength: step.pathLength, //path length no longer available here
    //     connectionPathMaxLength,
    //   })
    // );

    const sequenceDuration = stepDuration * sequenceA.length;
    const commonTransition = getCommonTransition(sequenceDuration);

    return {
      x1: x1Sequence,
      y1: y1Sequence,
      opacity: 0.01,
      //opacitySequence,
      transition: {
        x1: { ...commonTransition, delay: initialDelay },
        y1: { ...commonTransition, delay: initialDelay },
        // opacity: commonTransition, //TO-DO: custom transition that only cares for short path lengths
      },
    };
  },
  animateB: ({ sequenceB, gridGapSize, connectionPathMaxLength }: any) => {
    const x2Sequence = sequenceB.map((step: any) => step.x * gridGapSize);
    const y2Sequence = sequenceB.map((step: any) => step.y * gridGapSize);
    const initialDelay = sequenceB[0].initialDelay;

    const sequenceDuration = stepDuration * sequenceB.length;
    const commonTransition = getCommonTransition(sequenceDuration);
    return {
      x2: x2Sequence,
      y2: y2Sequence,
      delay: initialDelay,
      transition: {
        x2: { ...commonTransition, delay: initialDelay },
        y2: { ...commonTransition, delay: initialDelay },
      },
    };
  },
};
