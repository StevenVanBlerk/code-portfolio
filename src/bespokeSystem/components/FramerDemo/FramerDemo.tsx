"use client";

import { motion } from "framer-motion";

const FramerDemo = () => {
  return (
    <div style={{ padding: "20px", background: "pink" }}>
      <motion.div
        transition={{ repeat: Infinity, duration: 2 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          background: "green",
        }}
        style={{ background: "lightblue", height: "20px", width: "20px" }}
      />
    </div>
  );
};

export default FramerDemo;
