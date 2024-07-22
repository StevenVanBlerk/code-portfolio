import { MutableRefObject } from "react";

export type ExtendedRef = {
  ref: MutableRefObject<HTMLElement | null>;
  isInView: boolean;
  isNeighbourInView: boolean;
  distanceFromView: number;
};
