import { HeroSection } from '../shared/layouts/LandingPage/HeroSection';
import { FeatureSection } from '../shared/layouts/LandingPage/FeatureSection';
import { NewsletterSubscription } from '../shared/layouts/LandingPage/NewsletterSubscriptionSection';
import { Footer } from '../shared/layouts/LandingPage/FooterSection';
import { Box } from '@mui/material';

export const LandingPage = () => {
  return <Box>
    <HeroSection />
    <FeatureSection />
    <NewsletterSubscription />
    <Footer />
  </Box>;
};