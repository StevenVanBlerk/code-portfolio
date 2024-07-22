import { useRef } from "react";
import { useInView } from "framer-motion";

// TO-DO: rename files and folder to CodeSamples
export const buildExtendedRefs = (refCount: number) => {
  const inViewThreshold = "300px";
  const extendedRefs = Array.from({ length: refCount }, () => {
    const ref = useRef(null);
    const isRefInView = useInView(ref, {
      margin: `-${inViewThreshold} 0px -${inViewThreshold} 0px`,
    });

    return {
      ref,
      isInView: isRefInView,
      isNeighbourInView: false,
      distanceFromView: refCount,
    };
  });

  // evaluating neighbours
  extendedRefs.forEach((extendedRef, index) => {
    let distanceFromView = extendedRefs.length;

    extendedRefs.forEach((neighbourRef, neighbourIndex) => {
      const distanceFromExtendedRef = Math.abs(index - neighbourIndex);
      if (distanceFromExtendedRef < distanceFromView && neighbourRef.isInView) {
        distanceFromView = distanceFromExtendedRef;
      }
    });

    const isPreviousRefInView =
      index === 0 ? false : extendedRefs[index - 1].isInView;
    const isNextRefInView =
      index === extendedRefs.length - 1
        ? false
        : extendedRefs[index + 1].isInView;

    extendedRef.isNeighbourInView = isPreviousRefInView || isNextRefInView;
    extendedRef.distanceFromView = distanceFromView;
  });

  return extendedRefs;
};
