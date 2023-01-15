import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';
import { useAuth0 } from '@auth0/auth0-react';

export function Homepage() {
  const { t } = useTranslation('translation', { i18n: i18next });
  const { isAuthenticated, user } = useAuth0();

  return <div>
    {isAuthenticated ? 
      <p> {t('homepage.intro')} {user?.name} </p>
      : <p> {t('homepage.pleaseLogIn')} </p>
    }
  </div>;
}
