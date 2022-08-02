import { TestimonialCard } from '@/components/cards';
import { WIP } from '@/components/misc';
import { Grid } from '@mantine/core';
import React from 'react';

export const Testimonials = ({ data }: { data: any }) => {
  if (!data.length) {
    return (
      <div>
        <h1>Testimonials</h1>
        <WIP />
      </div>
    );
  }

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
