"use client";
import { LoadingSpinner } from "src/designSystem";
import { useEffect, useState } from "react";

const Loading = () => {
  // LoadingSpinner is only displayed if loading takes longer than 600ms
  const [isSlowLoad, setIsSlowLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsSlowLoad(true);
    }, 600);
  }, []);

  if (!isSlowLoad) return;

  return (
    <div className="mx-auto w-fit">
      <LoadingSpinner width={300} />
    </div>
  );
};

export default Loading;
