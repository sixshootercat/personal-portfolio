import { WIP } from '@/components/misc';

export const About = ({ data }: { data: any }) => {
  if (!data.length) {
    return (
      <div>
        <h1>About</h1>
        <WIP />
      </div>
    );
  }

  console.log({ data });

  return (
    <div>
      {data.map((el: any) => {
        return (
          <div key={el}>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </div>
        );
      })}
    </div>
  );
};
