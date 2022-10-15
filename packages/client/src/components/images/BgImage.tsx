import { Box } from '@mantine/core';
import Image from 'next/image';

type Props = {
  src: string;
  children: React.ReactNode;
  alt: string;
  className?: string;
};

export const BgImage = ({
  children,
  alt = 'Background Image',
  src,
  className,
}: Props) => {
  return (
    <Box className={className}>
      <Image alt={alt} src={src} layout='fill' objectFit='cover' quality={80} />
      <Box sx={{ zIndex: 10 }}>{children}</Box>
    </Box>
  );
};
