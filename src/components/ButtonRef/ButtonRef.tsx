import React from 'react';
import { Button } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsColorOverrides } from '@mui/material/Button/Button';

interface ButtonRefProps {
  href: string;
  name: string;
  color?: OverridableStringUnion<
    'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    ButtonPropsColorOverrides
  >;
}

const ButtonRef = ({ href, name, color }: ButtonRefProps) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      <Button size='small' color={color ?? 'secondary'}>
        {name}
      </Button>
    </a>
  );
};

export default ButtonRef;
