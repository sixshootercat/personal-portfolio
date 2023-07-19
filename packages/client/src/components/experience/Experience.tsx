import { WIP } from '@/components/wip';
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
      {data.map((el: any) => {
        return (
          <div key={el._id}>
            <p>{el.companyName}</p>
            <p>{el.description}</p>
            <p>{el.startDate}</p>
            <p>{el.endDate}</p>
          </div>
        );
      })}
    </div>
  );
};
