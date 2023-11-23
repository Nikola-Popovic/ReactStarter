import React from 'react';
import { Select, SelectProps, styled } from '@mui/material';
import { Sizing } from '../styling/StylingConstants';

type SkolaSelectProps = SelectProps;


const StyledSelect = styled(Select)`
  margin: 0 ${Sizing.fixedS};
`;

export const SkolaSelect = (props: SkolaSelectProps) => {
  return <StyledSelect {...props} />;
};