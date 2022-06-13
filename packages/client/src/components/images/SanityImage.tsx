import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { ImageProps as NextImageProps } from "next/image";
import { client } from "@/sanity/sanity.client";

type SanityImageObj = {
  _type: string;
  asset: {
    _ref: string;
  };
  [key: string]: any;
};

type NextSanityImageProps = {
  image: SanityImageObj;
  quality?: number;
  priority?: false;
  layout?: NextImageProps["layout"];
  objectFit?: NextImageProps["objectFit"];
  objectPosition?: NextImageProps["objectPosition"];
};

export const NextSanityImage = ({
  image,
  quality = 75,
  priority = false,
  layout = "fill",
  objectFit = "cover",
  objectPosition = "center",
}: NextSanityImageProps) => {
  const hotspotValue = useRef<undefined | string>();

  const sanityImage = useNextSanityImage(client, image);

  // fallback image
  if (!sanityImage) {
    return null;
  }

  if (image?.hotspot) {
    hotspotValue.current = `${image?.hotspot?.x * 100}% ${
      image?.hotspot?.y * 100
    }%`;
  }

  return (
    <Image
      priority={priority}
      quality={quality}
      layout={layout}
      alt={image.alt || "img"}
      objectFit={objectFit}
      objectPosition={hotspotValue?.current || objectPosition}
      {...sanityImage}
      width={layout !== "fill" ? "100%" : undefined}
      height={layout !== "fill" ? "100%" : undefined}
    />
  );
};
