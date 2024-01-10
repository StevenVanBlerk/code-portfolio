/** framer-motion and SSR notes:
 * framer-motion seems to only use CSR when using variants (to be confirmed).
 * Having some components use in line animation seems to conflict if others are using variants to describe animation.
 * Moving to SSR might be possible if I replace these variants with in line props
 */

const stepDuration = 0.2;

const getBasicTransition = (sequenceDuration: number) => ({
  delay: 0.1,
  ease: "easeInOut",
  duration: sequenceDuration,
  repeat: Infinity,
  repeatType: "reverse",
});

export const drawGridLine = {
  initial: {
    pathLength: 0,
  },
  animate: ({ lineIndex }: any) => {
    const delay = lineIndex * 0.05;
    return {
      pathLength: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 0.2,
          bounce: 0,
        },
      },
    };
  },
};

export const moveCircle = {
  animate: ({ sequence, gridGapSize }: any) => {
    const cxSequence = sequence.map((step: any) => step.x * gridGapSize);
    const cySequence = sequence.map((step: any) => step.y * gridGapSize);
    const sequenceDuration = stepDuration * sequence.length;
    const basicTransition = getBasicTransition(sequenceDuration);
    return {
      cx: cxSequence,
      cy: cySequence,
      transition: {
        cx: basicTransition,
        cy: basicTransition,
      },
    };
  },
};

export const moveNodeConnection = {
  animate: ({ sequence, gridGapSize }: any) => {
    const x1Sequence = sequence.map((step: any) => step.x1 * gridGapSize);
    const y1Sequence = sequence.map((step: any) => step.y1 * gridGapSize);
    const x2Sequence = sequence.map((step: any) => step.x2 * gridGapSize);
    const y2Sequence = sequence.map((step: any) => step.y2 * gridGapSize);

    const sequenceDuration = stepDuration * sequence.length;
    const basicTransition = getBasicTransition(sequenceDuration);
    return {
      x1: x1Sequence,
      y1: y1Sequence,
      x2: x2Sequence,
      y2: y2Sequence,
      transition: {
        x1: basicTransition,
        y1: basicTransition,
        x2: basicTransition,
        y2: basicTransition,
      },
    };
  },
};
