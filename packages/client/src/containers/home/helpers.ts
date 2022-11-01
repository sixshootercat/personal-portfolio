import { TechItem } from './TechToolsList';

export const createColumns = ({
  isMobile,
  items,
}: {
  isMobile: boolean;
  items: TechItem[];
}) => {
  const perColumn = isMobile ? 4 : 3;
  const columns = items.reduce<TechItem[][]>((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perColumn);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new column
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return columns;
};
