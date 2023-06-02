import { Text } from '@mantine/core';

export type TechItem = {
  name: string;
  id: string;
  url: string;
};

type TechnologiesListProps = {
  items: TechItem[];
};

export const TechnologiesList = ({ items }: TechnologiesListProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4'>
      {items.map(({ name, id, url }) => (
        <div
          key={id}
          className='bg-gray-200 rounded-full px-3 py-1 m-1 text-sm text-gray-700 cursor-pointer'
        >
          <a href={url} target='blank' rel='noopener noreferrer'>
            <Text>{name}</Text>
          </a>
        </div>
      ))}
    </div>
  );
};
