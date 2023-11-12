import React from 'react';
import { Outlet } from 'react-router-dom';
import { SIDENAV_MIN_WIDTH, Sizing } from '../styling/StylingConstants';
import { styled } from '@mui/material';

const PageLayout = styled('div')`
  position: fixed;
  margin: ${Sizing.fixedXL};
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${Sizing.smallScreen}) {
    left: ${SIDENAV_MIN_WIDTH};
  }
`;

// Routes will be put in this
export const PageContent = () => {
  return <PageLayout>
    <Outlet />
  </PageLayout>;
};