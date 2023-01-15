import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';

export function UnprotectedPage() {
  const { t } = useTranslation('translation', { i18n: i18next });
  return <div>
    {t('unprotectedPage.intro')}
  </div>;
}
