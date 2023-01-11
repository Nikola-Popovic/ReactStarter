import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';
import { useAuth0 } from '@auth0/auth0-react';

export function Homepage() {
  const { t } = useTranslation('translation', { i18n: i18next });
  const { user } = useAuth0();

  return <div>
    {t('homepage.title')}
    <p> {t('homepage.intro')} {user?.email} </p>
  </div>;
}
