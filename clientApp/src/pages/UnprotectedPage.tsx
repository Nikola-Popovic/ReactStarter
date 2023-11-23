import React from 'react';
import { useTranslation } from 'react-i18next';

export function UnprotectedPage() {
  const { t } = useTranslation(['translation']);
  return <div>
    {t('unprotectedPage.intro')}
  </div>;
}
