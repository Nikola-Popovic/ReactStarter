import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';

export function Page2() {
  const { t } = useTranslation('translation', { i18n: i18next });

  return <div>
    This is page 2
  </div>;
}
