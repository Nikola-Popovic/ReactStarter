import { Box, Grid } from '@mui/material';
import { LandingPageTypo } from './Common';
import { useTranslation } from 'react-i18next';

export const InformationSection: React.FC = () => {
  const { t } = useTranslation(['landingPage']);
  return (
    <Box p={3}>
      <LandingPageTypo variant="h4" gutterBottom>
        {t('informationSection.title')}
      </LandingPageTypo>
      <Grid container spacing={2}>
        {/* Iterate over an array of services and render them */}
      </Grid>
    </Box>
  );
};