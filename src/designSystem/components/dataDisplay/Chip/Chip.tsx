import { ReactNode } from "react";

type ChipProps = { children: ReactNode };

const Chip = ({ children }: ChipProps) => {
  return (
    <span
      style={{ border: "1px solid rgb(97, 97, 97)" }}
      className="w-fit text-nowrap rounded-2xl bg-gray-950 px-2 py-1"
    >
      {children}
    </span>
  );
};

export default Chip;
