export const randomProperFraction = () => {
  return Math.random();
};

export const randomInteger = ({ min, max }: { min: number; max: number }) => {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate a random integer between min and max (inclusive of both)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomArrayEntry = (array: Array<any>) => {
  const index = Math.floor(Math.random() * array.length);
  return {
    entry: array[index],
    index,
  };
};

export const randomArrayStep = ({
  array,
  currentIndex,
  step = 1,
}: {
  array: Array<any>;
  currentIndex: number;
  step?: number;
}) => {
  const min = currentIndex - step > 0 ? currentIndex - step : 0;
  const max =
    currentIndex + step < array.length - 1
      ? currentIndex + step
      : array.length - 1;

  const newIndex = randomInteger({ min, max });

  return { entry: array[newIndex], index: newIndex };
};
