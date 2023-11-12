import React from 'react';
import { ColorConstants } from '../styling/ColorConstants';
import { FONT_FAMILLY, Sizing } from '../styling/StylingConstants';
import { useTranslation } from 'react-i18next';
import i18next from '../lang/i18next';
import { MenuItem, Select, Button, styled } from '@mui/material';
import LoginLogoutButton from '../auth/LoginLogoutButton';
import { SkolaSelect } from '../components/SkolaSelect';

export const APP_BAR_HEIGHT = '50px';
export const TITLE_WIDTH = '200px';

const Bar = styled('div')`
  display: flex;
  width: 100%;
  padding: ${Sizing.spacingS};
  height: ${APP_BAR_HEIGHT};
  color: white;
  min-height: 10px;
  font-family: ${FONT_FAMILLY};
  background-color: ${ColorConstants.AppBarColor};
  height: ${APP_BAR_HEIGHT};
`;

const BoxStart = styled('div')`
  display: flex;
  position: fixed;
  z-index: 200;
  height: inherit;
`;

const BoxCenter = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 0;
`;

const BoxEnd = styled('div')`
  position: fixed;
  right: 0px;
  height: inherit;
  z-index: 100;
`;

const AppTitle = styled('div')`
  color: ${ColorConstants.PrimaryAccent};
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 1em;
`;

const SubTitle = styled('div')`
  opacity: 0.8;
  font-size: 0.8em;
`;

const StyledSelect = styled(SkolaSelect)`
  color: white;
  height: calc(${APP_BAR_HEIGHT} - ${Sizing.spacingS});
  & .MuiSelect-icon,
  & .MuiInputBase-input {
    color: white;
  }
  & .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;

export function AppBar() {
  const { t } = useTranslation('translation', { i18n: i18next });
  const [lang, setLang] = React.useState(i18next.language);

  const handleLangChange = (event: React.ChangeEvent<{ value: string }>) => {
    setLang(event.target.value);
    i18next.changeLanguage(event.target.value);
  };

  return <Bar>
    <BoxStart>
      <Button> Helo </Button>
    </BoxStart>
    <BoxCenter>
      <AppTitle>
        {t('appBar.title')}
      </AppTitle>
      <SubTitle>
        {t('appBar.subtitle')}
      </SubTitle>
    </BoxCenter>
    <BoxEnd>
      <StyledSelect
        id="language-select"
        value={lang}
        displayEmpty
        onChange={(e) => handleLangChange(e as React.ChangeEvent<{ value: string }>)}
      >
        {i18next.languages.map((lang) => <MenuItem key={lang} value={lang}>{lang}</MenuItem>)}
      </StyledSelect>
      <LoginLogoutButton />
    </BoxEnd>
  </Bar>;
}