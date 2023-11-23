import React from 'react';
import { useTranslation } from 'react-i18next';

export function ProtectedPage() {
  const { t } = useTranslation(['translation']);

  return <div>
    {t('protectedPage.intro')}
  </div>;
}
