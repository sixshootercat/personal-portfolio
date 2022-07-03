import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type HomeIconProps = {
  size?: SizeProp;
};

export const HomeIcon = ({ size = 'sm' }: HomeIconProps) => {
  return (
    <div>
      <FontAwesomeIcon icon={faHome} size={size} />
    </div>
  );
};
