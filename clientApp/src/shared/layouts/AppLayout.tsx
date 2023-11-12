import React from 'react';
import { AppBar, APP_BAR_HEIGHT } from './AppBar';
import { PageContent } from './PageContent';
import { NavBar } from './NavBar';
import SideNav from './SideNav';
import { styled } from '@mui/material';

const AppContainer = styled('div')`
  display: flex;
  flex-direction: row;
  height: calc(100% - ${APP_BAR_HEIGHT});
`;

export function AppLayout() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <SideNav isVisible={false}></SideNav>
      <NavBar isVisible={true}></NavBar>
      <AppContainer>
        <PageContent></PageContent>
      </AppContainer>
    </div>
  );
}