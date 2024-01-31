import { Box, Button, styled } from '@mui/material';
import { LandingPageTypo } from './Common';
import { useTranslation } from 'react-i18next';

const FeatureBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));
    
export const FeatureSection: React.FC = () => {
  const { t } = useTranslation(['landingPage']);
  return (
    <FeatureBox>
      <LandingPageTypo variant="h4" component="h2" gutterBottom>
        {t('featureSection.title')}
      </LandingPageTypo>
      <LandingPageTypo variant="subtitle1" gutterBottom>
        {t('featureSection.subtitle')}
      </LandingPageTypo>
      <Box mt={2}>
        <Button variant="contained" color="primary">
          {t('featureSection.primaryButton')}
        </Button>
        <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
          {t('featureSection.secondaryButton')}
        </Button>
      </Box>
    </FeatureBox>
  );
};