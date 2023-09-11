import { SectionTitle } from "./SectionTitle";
import { Text } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { NextSanityImage } from "@/components/images";

type AboutMeProps = {
  sanityData?: any;
};

export const AboutMe = ({ sanityData }: AboutMeProps) => {
  const blocks = sanityData?.[0]?.biography[0];
  const role = sanityData?.[0]?.role;
  const image = sanityData?.[0]?.profileImage;

  return (
    <div className="flex items-center justify-center flex-col">
      <SectionTitle title="👨‍💻 About Me" />
      <div className="rounded-full overflow-hidden w-60 my-6">
        <NextSanityImage image={image} objectFit="cover" />
      </div>
      <Text align="center" className="text-2xl mb-4">
        {role}
      </Text>
      <div className="mb-4">
        <PortableText value={[blocks]} />
      </div>
    </div>
  );
};
