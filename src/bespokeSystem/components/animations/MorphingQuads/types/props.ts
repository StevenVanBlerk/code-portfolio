export type AnimationOrigin =
  | "top-left"
  | "top"
  | "top-right"
  | "left"
  | "center"
  | "right"
  | "bottom-left"
  | "bottom"
  | "bottom-right"
  | "random"
  | "none";

export type MorphingQuadsProps = {
  /** px */
  canvasWidth: number;
  /** px */
  canvasHeight: number;
  columnCount: number;
  isAnimated?: boolean;
  animationOrigin?: AnimationOrigin;
  isInteractive?: boolean;
  isInitialisedExpanded?: boolean;
  isOverflowing?: boolean;
  isInDebugMode?: boolean;
  transitionProps: {
    /** ms */
    frequency?: number;
    /** s */
    transitionDuration?: number;
  };
  styleProps: {
    /** px */
    gap?: number;
    scaleFactor?: number;
    rotationCount?: number;
    fill?: string;
    /** px */
    borderRadius?: number;
  };
};
