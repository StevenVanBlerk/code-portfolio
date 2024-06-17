import MorphinQuadsAnimation from "./MorphingQuadsAnimation";
import Copy from "./Copy";

const Cover = () => {
  return (
    <div className="flex justify-between">
      <MorphinQuadsAnimation />

      <div className="relative z-10 ml-auto w-fit p-6">
        <Copy />
      </div>
    </div>
  );
};

export default Cover;
