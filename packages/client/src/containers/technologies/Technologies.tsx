import { WIP } from '@/components/misc';
import React from 'react';
import { NextSanityImage } from '@/components/images';

export const Technologies = ({ content }: { content: any }) => {
  if (!content.length) {
    return (
      <div>
        <h1>Technologies</h1>
        <WIP />
      </div>
    );
  }

  return (
    <div>
      <h1>Technologies</h1>
      {content.map((el: any) => {
        return (
          <div key={el._id}>
            <p>{el.name}</p>
            <NextSanityImage
              image={el.icon}
              height={100}
              width={100}
              layout='fixed'
            />
            <p>{el.url}</p>
          </div>
        );
      })}
    </div>
  );
};
