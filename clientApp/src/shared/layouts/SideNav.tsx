import React, { useState } from 'react';
import styled from 'styled-components';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { Profile } from '@styled-icons/remix-line/Profile';
import { useTranslation } from 'react-i18next';
import i18next from '../lang/i18next';
import { useNavigate  } from 'react-router-dom';
import { ColorConstants } from '../styling/ColorConstants';
import { APP_BAR_HEIGHT } from './AppBar';
import { SIDENAV_MAX_WIDTH, SIDENAV_MIN_WIDTH, SMALL_SCREEN } from '../styling/StylingConstants';

const SideNavContainer = styled.div`
  color: white;
  background-color: ${ColorConstants.AppBarColor};
  width: ${SIDENAV_MAX_WIDTH};
  height: 100%;
  position: fixed;
  top: ${APP_BAR_HEIGHT}};
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  @media (max-width: ${SMALL_SCREEN}) {
    width: ${SIDENAV_MIN_WIDTH};
  }
`;

const NavItem = styled.div`
  display: flex;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
  align-items: center;
  &:hover {
    background-color: ${ColorConstants.Primary};
  }
  > *:first-child {
    padding-right: 5px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 14px;
    padding: 10px;
    > *:first-child {
      margin-bottom: 10px;
    }
  }
`;

export interface ISideNavProps {
    isVisible: boolean;
}

const SideNav = (props: ISideNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { i18n: i18next });

  const navigateTo = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <SideNavContainer>
      <NavItem onClick={() => navigateTo('/')}>
        <HomeAlt size={20} />  
        <span>{t('sideNav.home')}</span>
      </NavItem>
      <NavItem onClick={() => navigateTo('/protectedRoute')}>
        <SearchAlt size={20} />
        <span>{t('sideNav.search')}</span>
      </NavItem>
      <NavItem onClick={() => navigateTo('/unprotectedRoute')}>
        <Profile size={20} /> 
        <span>{t('sideNav.profile')}</span>
      </NavItem>
    </SideNavContainer>
  );
};

export default SideNav;