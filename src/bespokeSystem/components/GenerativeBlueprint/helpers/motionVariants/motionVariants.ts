/** framer-motion and SSR notes:
 * framer-motion seems to only use CSR when using variants (to be confirmed).
 * Having some components use in line animation seems to conflict if others are using variants to describe animation.
 * Moving to SSR might be possible if I replace these variants with in line props
 */

import {
  animateNodeConnectionParams,
  animateNodeGroupParams,
  animateNodeRadiusParams,
} from "./_types";

// TO-DO: experiment with a more elastic transition
const getCommonTransition = (sequenceDuration: number) => ({
  ease: "easeInOut", // https://www.framer.com/motion/easing-functions/
  duration: sequenceDuration,
  repeat: Infinity,
  repeatType: "reverse",
});

export const animateNodeGroup = {
  animate: ({
    sequence,
    gridGapSize,
    stepDuration,
  }: animateNodeGroupParams) => {
    const initialDelay = sequence[0].initialDelay;
    const cxSequence = sequence.map((step) => step.x * gridGapSize);
    const cySequence = sequence.map((step) => step.y * gridGapSize);
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
  animate: ({
    sequence,
    radiusMultiplier,
    stepDuration,
  }: animateNodeRadiusParams) => {
    const initialDelay = 0;

    const rSequence = sequence.map((step) => {
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

export const animateNodeConnection = {
  initial: () => {
    //BUG: not working perfectly. initial frame is incorrect. workaround could be to check initial in animateOpacity
    //ALTERNATIVELY, create a motion value at the component level to store this
    return { opacity: 0 };
  },
  animateA: ({
    sequenceA,
    gridGapSize,
    stepDuration,
  }: animateNodeConnectionParams) => {
    const x1Sequence = sequenceA.map((step) => step.x * gridGapSize); //TO-DO ADD DELAY TO ANIMATEA and ANIMATEB
    const y1Sequence = sequenceA.map((step) => step.y * gridGapSize);
    const initialDelay = sequenceA[0].initialDelay;
    const sequenceDuration = stepDuration * sequenceA.length;
    const commonTransition = getCommonTransition(sequenceDuration);

    return {
      x1: x1Sequence,
      y1: y1Sequence,
      transition: {
        x1: { ...commonTransition, delay: initialDelay },
        y1: { ...commonTransition, delay: initialDelay },
      },
    };
  },
  animateB: ({
    sequenceB,
    gridGapSize,
    stepDuration,
  }: animateNodeConnectionParams) => {
    const x2Sequence = sequenceB.map((step) => step.x * gridGapSize);
    const y2Sequence = sequenceB.map((step) => step.y * gridGapSize);
    const initialDelay = sequenceB[0].initialDelay;

    const sequenceDuration = stepDuration * sequenceB.length;
    const commonTransition = getCommonTransition(sequenceDuration);
    return {
      x2: x2Sequence,
      y2: y2Sequence,
      transition: {
        x2: { ...commonTransition, delay: initialDelay },
        y2: { ...commonTransition, delay: initialDelay },
      },
    };
  },
  animateOpacity: ({ opacity }: animateNodeConnectionParams) => {
    return {
      opacity,
    };
  },
};
