import { WIP } from '@/components/misc';
import React from 'react';

export const Experience = ({ data }: { data: any }) => {
  if (!data.length) {
    return (
      <div>
        <h1>Experience</h1>
        <WIP />
      </div>
    );
  }

  return (
    <div>
      {data?.map((el: any) => {
        return (
          <div key={el._id}>
            <p>{el.year}</p>
            <p>{el.jobs[0].company}</p>
            <p>{el.jobs[0].desc}</p>
          </div>
        );
      })}
    </div>
  );
};
