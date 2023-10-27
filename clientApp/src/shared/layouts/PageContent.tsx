import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { SIDENAV_MAX_WIDTH, SIDENAV_MIN_WIDTH, SMALL_SCREEN, spacingXL } from '../styling/StylingConstants';

const PageLayout = styled.div`
  position: fixed;
  left: ${SIDENAV_MAX_WIDTH};
  margin: ${spacingXL};
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${SMALL_SCREEN}) {
    left: ${SIDENAV_MIN_WIDTH};
  }
`;

// Routes will be put in this
export const PageContent = () => {
  return <PageLayout>
    <Outlet />
  </PageLayout>;
};