import { AnimationOrigin } from "../types/props";

export const evaluateTransitionDelay = (
  animationOrigin: AnimationOrigin,
  columnCount: number,
  rowCount: number,
  isOffset: boolean,
  rowIndex: number,
  colIndex: number,
) => {
  const centerX = columnCount / 2;
  const centerY = rowCount / 2;

  const columnsFromLeft = rowIndex;
  const columnsFromRight = columnCount - rowIndex;
  const columnsFromCenter = isOffset
    ? Math.abs(centerX - rowIndex - 0.5)
    : Math.abs(centerX - rowIndex);
  const rowsFromTop = colIndex;
  const rowsFromBottom = rowCount - colIndex;
  const rowsFromCenter = Math.abs(centerY - colIndex);

  const normalisationValue = 10;

  // TO-DO: improve calculations for corner origins. 1 up should not be equivalent to 1 across
  if (animationOrigin === "top-left") {
    return (rowsFromTop + columnsFromLeft) / normalisationValue;
  }
  if (animationOrigin === "top") {
    return rowsFromTop / normalisationValue;
  }
  if (animationOrigin === "top-right") {
    return (columnsFromRight + rowsFromTop) / normalisationValue;
  }
  if (animationOrigin === "left") {
    return columnsFromLeft / normalisationValue;
  }
  if (animationOrigin === "center") {
    return (columnsFromCenter + rowsFromCenter) / normalisationValue;
  }
  if (animationOrigin === "right") {
    return columnsFromRight / normalisationValue;
  }
  if (animationOrigin === "bottom-left") {
    return (columnsFromLeft + rowsFromBottom) / normalisationValue;
  }
  if (animationOrigin === "bottom") {
  }
  if (animationOrigin === "bottom-right") {
  }
  if (animationOrigin === "random") {
    return Math.random();
  }
  return 0;
};
