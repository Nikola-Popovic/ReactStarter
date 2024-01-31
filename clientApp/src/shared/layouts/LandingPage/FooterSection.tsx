import { Box, Button, Grid, Link, TextField, styled } from '@mui/material';
import { LandingPageTypo } from './Common';
import { useTranslation } from 'react-i18next';

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(4),
}));

const LinksBox = styled(Box)(({ theme }) => ({
  '& > *': {
    marginRight: theme.spacing(1),
  },
}));

export const Footer: React.FC = () => {
  const { t } = useTranslation(['landingPage']);
  return (
    <FooterBox component="footer">
      <Grid container justifyContent="space-between">
        <Grid item columnSpacing={2} rowSpacing={2} gap={2}>
          <LandingPageTypo variant="h6">{t('footerSection.title')}</LandingPageTypo>
          <LinksBox>
            <Link href="#" color="inherit">About Us</Link>
            <Link href="#" color="inherit">Services</Link>
            <Link href="#" color="inherit">Contact Us</Link>
          </LinksBox>
        </Grid>
        <Grid item>
          <LandingPageTypo variant="h6">{t('footerSection.newsletterCa')}</LandingPageTypo>
          <form>
            <TextField
              label="Email Address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {t('footerSection.subscribe')}
            </Button>
          </form>
        </Grid>
      </Grid>
      <Box mt={4}>
        <LandingPageTypo variant="body2" color="textSecondary" align="center">
          {t('footerSection.copyRights')}
        </LandingPageTypo>
      </Box>
    </FooterBox>
  );
};