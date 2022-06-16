import { suspend } from "suspend-react";

const getInitialPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/?search=Ta");
  const data = await res.json();
  return data.results;
};

export const About = () => {
  const planets = suspend(getInitialPlanets, ["initialPlanets"], {
    lifespan: 5000,
  });

  return (
    <div>
      {(planets as any).map((field: any) => {
        return <p key={field.url}>{field.name}</p>;
      })}
    </div>
  );
};
