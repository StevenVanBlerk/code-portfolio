"use client";

import Animation from "./Animation";
import Copy from "./Copy";

const Cover = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Copy />
      <Animation />
    </div>
  );
};

export default Cover;
