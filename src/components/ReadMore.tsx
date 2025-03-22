"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ReadMoreProps {
  content: string;
  length: number;
  showMoreText?: string;
  showLessText?: string;
  contentClassName?: string;
}

const ReadMore = ({
  content,
  length,
  showMoreText = "Read More",
  showLessText = "Read Less",
  contentClassName,
}: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent =
    content.length > length && !isExpanded
      ? content.slice(0, length) + "..."
      : content;
  return (
    <div>
      <p className={`${contentClassName}`}>{truncatedContent}</p>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`text-accent-primary flex items-center pt-2 text-sm font-semibold`}
      >
        <p>{isExpanded ? showLessText : showMoreText}</p>
        <div>{isExpanded ? <ChevronUp /> : <ChevronDown />}</div>
      </button>
    </div>
  );
};

export default ReadMore;
