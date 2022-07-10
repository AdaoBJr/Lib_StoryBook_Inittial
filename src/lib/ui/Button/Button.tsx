import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

import { ReactFC } from 'types/interface';

export const Button: React.FC<ReactFC> = ({ children }) => (
  <ButtonMUI variant="contained">{children}</ButtonMUI>
);
