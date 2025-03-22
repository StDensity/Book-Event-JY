import { Bookmark } from "lucide-react";
import React from "react";

interface BadgeCircularProps {
  content: React.ReactNode;
}

const BadgeCircular = ({ content }: BadgeCircularProps) => {
  return <div className="bg-accent-primary rounded-full p-4">{content}</div>;
};

export default BadgeCircular;
