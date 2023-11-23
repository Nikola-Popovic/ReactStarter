import React from 'react';
import { useTranslation } from 'react-i18next';

export function LoginCallbackPage() {
  const { t } = useTranslation(['translation']);

  return <div>
    {t('login.success')}
  </div>;
}
