import { OrbitingNode } from "../OrbitingNode/OrbitingNode";
import buildPercentageBasedDimensions from "./buildPercentageBasedDimensions";

type Node = Omit<OrbitingNode, "orbitalRadius">;

export type BackgroundCircle = {
  strokeWidth: number;
  diameter: number;
  strokeStyle?: "dotted";
  rotationalPeriod?: number;
  rotationalDirection?: "clockwise" | "counter-clockwise";
  orbitingNode?: Node;
};

const buildBackgroundCircles = (canvasWidth: number): BackgroundCircle[] => {
  const { onePercentOfCanvas, strokeWidths } =
    buildPercentageBasedDimensions(canvasWidth);

  // circles are ordered in ascending order of diameter
  return [
    {
      strokeWidth: strokeWidths.xs,
      diameter: 1.5 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.xs,
      diameter: 2 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.xs,
      diameter: 2.5 * onePercentOfCanvas,
      strokeStyle: "dotted",
      rotationalPeriod: 15,
      rotationalDirection: "counter-clockwise",
    },
    {
      strokeWidth: strokeWidths.sm,
      diameter: 4.2 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.xl,
      diameter: 5 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.sm,
      diameter: 5.8 * onePercentOfCanvas,
      strokeStyle: "dotted",
      rotationalPeriod: 30,
      rotationalDirection: "clockwise",
    },
    {
      strokeWidth: strokeWidths.md,
      diameter: 15 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.sm,
      diameter: 15.8 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.sm,
      diameter: 19 * onePercentOfCanvas,
      strokeStyle: "dotted",
      rotationalPeriod: 60,
      rotationalDirection: "counter-clockwise",
    },
    {
      strokeWidth: strokeWidths.sm,
      diameter: 19.9 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.md,
      diameter: 23.1 * onePercentOfCanvas,
      orbitingNode: {
        nodeType: "A",
        nodeOuterRadius: 0.9 * onePercentOfCanvas,
        orbitalPeriod: 80,
        strokeWidths,
      },
    },
    {
      strokeWidth: strokeWidths.xs,
      diameter: 32.5 * onePercentOfCanvas,
      orbitingNode: {
        nodeType: "B",
        nodeOuterRadius: 0.54 * onePercentOfCanvas,
        orbitalPeriod: 40,
        strokeWidths,
      },
    },
    {
      strokeWidth: strokeWidths.xl,
      diameter: 37.9 * onePercentOfCanvas,
      orbitingNode: {
        nodeType: "CURSOR",
        nodeOuterRadius: 2 * onePercentOfCanvas,
        orbitalPeriod: 0,
        strokeWidths,
      },
    },
    {
      strokeWidth: strokeWidths.lg,
      diameter: 68 * onePercentOfCanvas,
      orbitingNode: {
        nodeType: "C",
        nodeOuterRadius: 2 * onePercentOfCanvas,
        orbitalPeriod: 50,
        nodeRotationalPeriod: 5,
        strokeWidths,
      },
    },
    {
      strokeWidth: strokeWidths.xs,
      diameter: 74 * onePercentOfCanvas,
      strokeStyle: "dotted",
      rotationalPeriod: 120,
      rotationalDirection: "clockwise",
    },
    {
      strokeWidth: strokeWidths.sm,
      diameter: 88.7 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.xl,
      diameter: 90 * onePercentOfCanvas,
    },
    {
      strokeWidth: strokeWidths.sm,
      diameter: 94.4 * onePercentOfCanvas,
    },
  ];
};

export default buildBackgroundCircles;
