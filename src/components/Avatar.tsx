import React from "react";

interface AvatarProps {
  url: string;
  className?: string;
}

const Avatar = ({ url, className }: AvatarProps) => {
  return (
    <div
      className={`size-12 rounded-full bg-cover ${className}`}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default Avatar;
