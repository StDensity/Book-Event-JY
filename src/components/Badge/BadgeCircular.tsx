'use client'

import React, { useState } from "react";

interface BadgeCircularProps {
  content: React.ReactNode;
}

const BadgeCircular = ({ content }: BadgeCircularProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Reset the animation after it completes
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div
      className={`bg-accent-primary rounded-full p-4 cursor-pointer transition-transform duration-200 ease-in-out ${
        isClicked ? "scale-110" : "scale-100"
      }`}
      onClick={handleClick}
    >
      {content}
    </div>
  );
};

export default BadgeCircular;