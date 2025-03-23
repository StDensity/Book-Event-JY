"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between font-semibold"
      >
        <p className="md:text-lg">{title}</p>
        <div>
          {isOpen ? (
            <ChevronUp className="stroke-accent-primary" />
          ) : (
            <ChevronDown className="stroke-accent-primary" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="pt-2">
          <p className="text-text-secondary font-normal md:text-lg">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
