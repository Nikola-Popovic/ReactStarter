import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';

export function ProtectedPage() {
  const { t } = useTranslation('translation', { i18n: i18next });

  return <div>
    This is a protected page
  </div>;
}
