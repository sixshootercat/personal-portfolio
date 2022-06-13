import React from "react";

export const Experiences = ({ data }: { data: any }) => {
  return (
    <div>
      {data?.map((el: any) => {
        return (
          <div key={el._id}>
            <p>{el.year}</p>
            <p>{el.works[0].company}</p>
          </div>
        );
      })}
    </div>
  );
};
