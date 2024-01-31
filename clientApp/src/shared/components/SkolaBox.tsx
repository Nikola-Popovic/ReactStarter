import { styled } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { FONT_FAMILLY, Sizing } from '../styling/StylingConstants';
import { ColorConstants } from '../styling/ColorConstants';

const Box = styled('div')`
  display: flex;
  padding: ${Sizing.fixedS};
  color: white;
  font-family: ${FONT_FAMILLY};
  background-color: ${ColorConstants.Primary};
  height: ${Sizing.fixedXXL};
`;

const BoxStart = styled('div')`
  display: flex;
  position: fixed;
  z-index: 200;
  height: inherit;
`;

const BoxCenter = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 0;
`;

const BoxEnd = styled('div')`
  position: fixed;
  right: 0px;
  height: inherit;
  z-index: 100;
`;

interface SkolaBoxProps {
    startItem?: React.ReactNode;
    endItem?: React.ReactNode;
}

export const SkolaBox = (props: PropsWithChildren<SkolaBoxProps>) => {
  return <Box className='box'>
    {props.startItem && <BoxStart> 
      {props.startItem}
    </BoxStart>}
    <BoxCenter>
      {props.children}
    </BoxCenter>
    {props.endItem && <BoxEnd> 
      {props.endItem}
    </BoxEnd>}
  </Box>;
};