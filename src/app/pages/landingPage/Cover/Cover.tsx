"use client";

import Animation from "./Animation";
import Copy from "./Copy";

const Cover = () => {
  return (
    <div className="grid grid-cols-2 items-center h-screen">
      <Copy />
      <Animation />
    </div>
  );
};

export default Cover;
