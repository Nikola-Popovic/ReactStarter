import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const AlignEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export function Homepage() {
  const { t } = useTranslation('translation', { i18n: i18next });

  return <div>
    <AlignEndContainer>
      <Button variant="contained" color="secondary"> 
        {t('general.add')}
      </Button>
    </AlignEndContainer>
  </div>;
}
