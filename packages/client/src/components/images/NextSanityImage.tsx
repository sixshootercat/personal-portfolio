import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { ImageProps as NextImageProps } from "next/image";
import { client } from "@/sanity/sanity-client";

type SanityImageObj = {
  _type: string;
  asset: {
    _ref: string;
  };
  [key: string]: any;
};

type NextSanityImageProps = {
  image: SanityImageObj;
} & Omit<NextImageProps, "src">;

export const NextSanityImage = ({
  image,
  quality = 75,
  priority = false,
  layout = "responsive",
  objectFit = "cover",
  objectPosition = "center",
  height = "auto",
  width = "100%",
}: NextSanityImageProps) => {
  const hotspotValue = useRef<undefined | string>();

  const imageProps = useNextSanityImage(client, image);

  // fallback image
  if (!imageProps) {
    return null;
  }

  if (image?.hotspot) {
    hotspotValue.current = `${image?.hotspot?.x * 100}% ${
      image?.hotspot?.y * 100
    }%`;
  }

  return (
    <Image
      {...imageProps}
      priority={priority}
      quality={quality}
      layout={layout}
      alt={image.alt || "img"}
      objectFit={objectFit}
      blurDataURL={imageProps.src}
      objectPosition={hotspotValue?.current || objectPosition}
      style={{ width, height }}
    />
  );
};
