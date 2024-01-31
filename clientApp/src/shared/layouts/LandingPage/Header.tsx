import { AppBar, Button, Toolbar } from '@mui/material';
import { LandingPageTypo } from './Common';
import { SkolaNavButton } from '../../components/SkolaNavButton';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation(['landingPage']);
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <LandingPageTypo variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {t('header.title')}
        </LandingPageTypo>
        <Button color="inherit">{t('header.secondaryButton')}</Button>
        <SkolaNavButton to="/app" label={t('header.primaryButton')} variant='contained' color="secondary" />
      </Toolbar>
    </AppBar>
  );
};