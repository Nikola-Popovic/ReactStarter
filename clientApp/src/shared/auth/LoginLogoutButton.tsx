import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18next from '../lang/i18next';
import styled from 'styled-components';
import { spacingS } from '../styling/StylingConstants';

const StyledButton = styled(Button)`
  margin: ${spacingS} !important;
  padding: ${spacingS};
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

  return <StyledButton variant={isAuthenticated ? 'outlined' : 'contained'} color="secondary" onClick={handleLoginLogout}>
    {isAuthenticated ? <>{t('login.logout')}</> : <>{t('login.login')}</>}
  </StyledButton>;
};

export default LoginLogoutButton;