import { Box, Button } from '@mui/material';
import { Header } from './Header';
import { LandingPageTypo } from './Common';
import { SkolaNavButton } from '../../components/SkolaNavButton';
import Images from '../../../Images/Images';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation(['landingPage']);
  return (
    <Box height="105lvh" 
      sx={{
        background: `linear-gradient(to bottom, rgba(255,255,255,0) 50%,
                rgba(255,255,255,1)),  url(${Images.landingBackground})`, 
        backgroundSize: 'cover'}}>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', padding: '25lvh 5lvw'}}>
        <LandingPageTypo variant="h3" gutterBottom>
          {t('heroSection.title')}
        </LandingPageTypo>
        <LandingPageTypo variant="subtitle1" gutterBottom>
          {t('heroSection.subtitle')}
        </LandingPageTypo>
        <Box mt={2}>
          <Button variant="outlined" color="primary">
            {t('heroSection.secondaryButton')}
          </Button>
          <SkolaNavButton to="/app" label={t('heroSection.primaryButton')} variant='contained' color="secondary" />
        </Box>
      </Box>
    </Box>
  );
};