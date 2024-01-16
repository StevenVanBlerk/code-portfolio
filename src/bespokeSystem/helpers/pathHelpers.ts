export const calculatePathLength = ({ x1, y1, x2, y2 }: any) => {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const deltaXSquare = Math.pow(deltaX, 2);
  const deltaYSquare = Math.pow(deltaY, 2);
  const distance = Math.sqrt(deltaXSquare + deltaYSquare);
  return distance;
};
