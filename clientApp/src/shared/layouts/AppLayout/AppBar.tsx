import React from 'react';
import { ColorConstants } from '../../styling/ColorConstants';
import { Sizing } from '../../styling/StylingConstants';
import { useTranslation } from 'react-i18next';
import { MenuItem, Button, styled } from '@mui/material';
import LoginLogoutButton from '../../auth/LoginLogoutButton';
import { SkolaSelect } from '../../components/SkolaSelect';
import { SkolaBox } from '../../components/SkolaBox';
import MenuIcon from '@mui/icons-material/Menu';
import i18next from 'i18next';
import { SkolaIconButton } from '../../components/SkolaIconButton';
import { Link } from 'react-router-dom';

export const APP_BAR_HEIGHT = '50px';
export const TITLE_WIDTH = '200px';

const AppTitle = styled('div')`
  color: ${ColorConstants.PrimaryAccent};
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 1em;
`;

const SubTitle = styled('div')`
  color: ${ColorConstants.White};
  opacity: 0.8;
  font-size: 0.8em;
  text-decoration: none;
`;

const StyledSelect = styled(SkolaSelect)`
  color: white;
  height: calc(${Sizing.fixedXXL} - ${Sizing.fixedS});
  & .MuiSelect-icon,
  & .MuiInputBase-input {
    color: white;
  }
  & .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;

interface AppBarProps {
  toggleSidebar: () => void;
  showSidebar?: boolean;
}

export function AppBar(props: AppBarProps) {

  const { t } = useTranslation(['translation']);
  const [lang, setLang] = React.useState(i18next.language);

  const handleLangChange = (event: React.ChangeEvent<{ value: string }>) => {
    setLang(event.target.value);
    i18next.changeLanguage(event.target.value);
  };

  return <SkolaBox
    startItem={<>
      {props.showSidebar && <SkolaIconButton color='blue' onClick={props.toggleSidebar}><MenuIcon /> </SkolaIconButton>}
    </>
    }
    endItem={<>
      <StyledSelect
        id="language-select"
        value={lang}
        displayEmpty
        onChange={(e) => handleLangChange(e as React.ChangeEvent<{ value: string }>)}
      >
        {i18next.languages.map((lang) => <MenuItem key={lang} value={lang}>{lang}</MenuItem>)}
      </StyledSelect>
      <LoginLogoutButton />
    </>}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <AppTitle>
        {t('appBar.title')}
      </AppTitle>
      <SubTitle>
        {t('appBar.subtitle')}
      </SubTitle>
    </Link>
  </SkolaBox>;
}