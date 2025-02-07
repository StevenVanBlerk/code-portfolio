// TO-DO: Scrutinise the location of each type

import { Page } from "src/app/types";

export type StrokeWidths = {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type CircleProps = {
  strokeWidth: number;
  radius: number;
  strokeColor?: string;
  fillColor?: string;
  strokeStyle?: "solid" | "dotted";
  rotationalPeriod?: number;
  rotationalDirection?: "clockwise" | "counter-clockwise";
};

export type SquareProps = {
  width: number;
  height: number;
  strokeWidth: number;
  canvasWidth: number;
  isRotated?: boolean;
};

export type OrbitingNodeProps = {
  nodeType: "CURSOR" | "A" | "B" | "C" | "D" | "E";
  nodeOuterRadius: number;
  orbitalRadius: number;
  orbitalPeriod: number;
  strokeWidths: StrokeWidths;
  nodeRotationalPeriod?: number;
  initialOrbitPosition: number;
  color?: string;
};

export type StaticCircle = {
  strokeWidth: number;
  diameter: number;
  strokeStyle?: "dotted";
  rotationalPeriod?: number;
  rotationalDirection?: "clockwise" | "counter-clockwise";
  orbitingNode?: Omit<OrbitingNodeProps, "orbitalRadius">;
};

export type StaticSquare = {
  width: number;
  height: number;
  strokeWidth: number;
  isRotated?: boolean;
};

export type BrowserValues = {
  windowDimensions: { width: number | null; height: number | null };
  currentPage: Page;
};

export type UniversalLayoutHandler = {
  isLoading: boolean;
  canvasWidth: number;
  backgroundCircles: StaticCircle[];
  backgroundSquares: StaticSquare[];
  windowDimensions: { width: number | null; height: number | null };
  currentPage: Page;
};
