"use client";

import { Image } from "@heroui/react";
import { FC } from "react";

import { siteConfig } from "@/shared/site";

export const Logo: FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <>
      <Image
        alt={siteConfig.shortName}
        className="rounded-none"
        height={size}
        src="/logo.png"
        width={size}
      />
    </>
  );
};
