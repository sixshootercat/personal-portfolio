import { TestimonialCard } from "@/components/cards";
import { Grid } from "@mantine/core";
import React from "react";

export const Testimonials = ({ data }: { data: any }) => {
  return (
    <Grid>
      {data?.map((el: any) => (
        <Grid.Col xs={6} sm={6} md={4} xl={3} key={el._id}>
          <TestimonialCard data={el} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
