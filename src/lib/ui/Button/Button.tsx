import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

import { ButtonProps } from 'types/interface';

export const Button: React.FC<ButtonProps> = (props) => (
  <ButtonMUI variant="contained" sx={{ ...props?.sx }}>
    {props.children}
  </ButtonMUI>
);
