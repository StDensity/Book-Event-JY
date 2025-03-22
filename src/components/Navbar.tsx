import { ChevronLeft, EllipsisVertical } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="top-0 z-10 w-full backdrop-opacity-80 md:hidden">
      <div className="flex w-full justify-between px-4 py-4">
        <ChevronLeft className="size-10 stroke-white" />
        <EllipsisVertical className="size-10 stroke-white" />
      </div>
    </div>
  );
};

export default Navbar;
