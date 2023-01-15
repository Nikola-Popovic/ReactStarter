import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../lang/i18next';

export function LoginCallbackPage() {
  const { t } = useTranslation('translation', { i18n: i18next });

  return <div>
    {t('login.success')}
  </div>;
}
