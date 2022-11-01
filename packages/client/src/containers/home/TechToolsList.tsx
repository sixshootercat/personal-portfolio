import { useMediaQuery } from '@mantine/hooks';
import { MEDIA_QUERIES } from 'src/constants';
import { createColumns } from './helpers';
import { Text } from '@mantine/core';

export type TechItem = {
  name: string;
  id: string;
};

type TechToolsListProps = {
  items: TechItem[];
};

export const TechToolsList = ({ items }: TechToolsListProps) => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  const cols = createColumns({ isMobile, items });

  return (
    <div className='flex justify-around items-center w-full'>
      {cols.map((col, i) => {
        return (
          <ul key={i} className='flex flex-col h-full gap-3 list-disc'>
            {col.map(({ name, id }) => {
              return (
                <li key={id}>
                  <Text>{name}</Text>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
