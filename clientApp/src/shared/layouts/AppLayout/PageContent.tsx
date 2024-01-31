import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sizing } from '../../styling/StylingConstants';

const PageLayout = styled('div')`
  position: fixed;
  margin: ${Sizing.fixedXL};
  width: calc(100% - 2*${Sizing.fixedXL}); 
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
`;

// Routes will be put in this
export const PageContent = () => {
  return <PageLayout>
    <Outlet />
  </PageLayout>;
};