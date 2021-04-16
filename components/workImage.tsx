import React from "react";
import Image from "next/image";

interface WorkImageProps {
  href: string;
  src: string;
  width: number;
  height: number;
}

export const WorkImage: React.FC<WorkImageProps> = ({
  href,
  src,
  width,
  height,
}) => {
  return (
    <div className="pt-5">
      <a target="_blank" href={href}>
        <Image src={src} width={width} height={height} />
      </a>
    </div>
  );
};
