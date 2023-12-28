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
  hidden: ({ cxInitial }: any) => ({
    cx: cxInitial,
  }),
  visible: ({ cxFinal }: any) => {
    return {
      cx: cxFinal,
      transition: {
        cx: {
          delay: 0.5,
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };
  },
};
