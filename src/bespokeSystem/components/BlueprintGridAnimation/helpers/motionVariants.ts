export const drawGridLine = {
  hidden: {
    pathLength: 0,
  },
  visible: ({ lineIndex }: any) => {
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

    const stepDuration = 1;
    const sequenceDuration = stepDuration * sequence.length;
    return {
      cx: cxSequence,
      cy: cySequence,
      transition: {
        cx: {
          delay: 0.5,
          ease: "easeInOut",
          duration: sequenceDuration,
          repeat: Infinity,
          repeatType: "reverse",
        },
        cy: {
          delay: 0.5,
          ease: "easeInOut",
          duration: sequenceDuration,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };
  },
};
