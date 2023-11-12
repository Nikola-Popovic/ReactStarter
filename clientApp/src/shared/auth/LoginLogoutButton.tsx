import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18next from '../lang/i18next';
import { Sizing } from '../styling/StylingConstants';
import { LogOut } from '@styled-icons/entypo/LogOut';
import { SkolaButton } from '../components/SkolaButton';

const StyledLogOut = styled(LogOut)`
  height: ${Sizing.spacingL};
`;

const LoginLogoutButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { t } = useTranslation('translation', { i18n: i18next });

  const handleLoginLogout = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  return <SkolaButton variant={isAuthenticated ? 'outlined' : 'contained'} color="secondary" onClick={handleLoginLogout}>
    {isAuthenticated ? <StyledLogOut /> : <>{t('login.login')}</>}
  </SkolaButton>;
};

export default LoginLogoutButton;