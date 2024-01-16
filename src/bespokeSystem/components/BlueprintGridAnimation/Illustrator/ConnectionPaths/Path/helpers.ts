/**
 * Calculates the opacity based on the current path length, minimum path length, and maximum path length.
 * @param {number} pathLength - The current path length.
 * @param {number} minPathLength - Any path length greater than this will have opacity < 1.
 * @param {number} maxPathLength - Any path length less than this will have opacity > 0.
 * @returns {number} - The calculated opacity between 0 and 1.
 */
export const normaliseOpacity = ({
  connectionLength,
  connectionMinLength,
  connectionMaxLength,
}: {
  connectionLength: number;
  connectionMinLength: number;
  connectionMaxLength: number;
}) => {
  // Ensure that currentLength is within the specified range
  const currentLength = Math.max(
    connectionMinLength,
    Math.min(connectionLength, connectionMaxLength)
  );

  // Calculate normalized opacity value between 0 and 1
  const normalisedOpacity =
    1 -
    (currentLength - connectionMinLength) /
      (connectionMaxLength - connectionMinLength);

  // Ensure opacity is within the valid range (0 to 1)
  const opacity = Math.max(0, Math.min(normalisedOpacity, 1));

  return opacity;
};
