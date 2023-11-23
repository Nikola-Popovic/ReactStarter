import React from 'react';
import { ColorConstants } from '../styling/ColorConstants';
import { FONT_FAMILLY, Sizing } from '../styling/StylingConstants';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/material';
import { SkolaUnderlineLink } from '../components/SkolaUnderlineLink';

export const APP_BAR_HEIGHT = '5vh';

const Bar = styled('div')<{isVisible: boolean}>`
  display: flex;
  flex-direction: row;
  padding: ${Sizing.fixedS};
  height: ${APP_BAR_HEIGHT};
  min-height: ${Sizing.fixedL};
  align-items: center;
  justify-content: center;
  font-family: ${FONT_FAMILLY};
  background-color: ${ColorConstants.PrimaryAccent};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  animation: ${props => props.isVisible ? 'slideIn 1s ease-in-out' : 'slideOut 1s ease-in-out'};
`;

export interface INavBarProps {
  isVisible: boolean;
}

export function NavBar(props : INavBarProps) {
  const { t } = useTranslation(['translation']);
  const { isAuthenticated } = useAuth0();

  return <Bar isVisible={props.isVisible}>
    <SkolaUnderlineLink color='white' id='home' to='/'> {t('nav.home')} </SkolaUnderlineLink>
    {
      isAuthenticated && 
        <>
          <SkolaUnderlineLink color='white'  id='link1' to='/protectedRoute'> {t('nav.link1')} </SkolaUnderlineLink>
        </>
    }
    <SkolaUnderlineLink color='white' id='link2' to='/unprotectedRoute'> {t('nav.link2')} </SkolaUnderlineLink>
  </Bar>;
}