import React from "react";

interface BadgeProps {
  content: string;
}

const Badge = ({ content }: BadgeProps) => {
  return (
    <div className="bg-accent-secondary rounded-lg px-2 py-1 text-xs font-bold text-white">
      {content}
    </div>
  );
};

export default Badge;
