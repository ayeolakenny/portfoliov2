import React from "react";
import Image from "next/image";

interface TechnologyImageProps {
  href: string;
  src: string;
  width?: number;
  height?: number;
}

export const TechnologyImage: React.FC<TechnologyImageProps> = ({
  href,
  src,
  width,
  height,
}) => {
  return (
    <a href={href} target="_blank">
      <Image src={src} width={width} height={height} />
    </a>
  );
};
