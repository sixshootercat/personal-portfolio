import { Box, Card, Text } from "@mantine/core";
import React from "react";
import { NextSanityImage } from "../images";

export const TestimonialCard = ({ data }: { data: any }) => {
  return (
    <Card className="w-full relative h-full">
      <Box sx={{ width: "100%", minHeight: "200px", position: "relative" }}>
        <NextSanityImage image={data.image} layout="responsive" />
      </Box>
      <Text weight={500}>{data.company}</Text>
      <Text size="sm">{data.name}</Text>
      <Text size="sm" sx={{ fontStyle: "italic" }}>
        &quot;{data.feedback}&quot;
      </Text>
    </Card>
  );
};
