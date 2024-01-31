import { Box, Button, TextField, styled } from '@mui/material';
import { LandingPageTypo } from './Common';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SubscriptionBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
}));

const SubscriptionForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}));
    
export const NewsletterSubscription: React.FC = () => {
  const { t } = useTranslation(['landingPage']);
  const [email, setEmail] = useState('');
    
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
    
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle subscription logic here
  };
    
  return (
    <SubscriptionBox>
      <LandingPageTypo variant="h4" component="h2" gutterBottom>
        {t('newsLetterSection.title')}
      </LandingPageTypo>
      <SubscriptionForm onSubmit={handleSubmit}>
        <TextField
          label={t('newsLetterSection.newsletterPlaceholder')}
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          sx={{ mr: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          {t('newsLetterSection.action')}
        </Button>
      </SubscriptionForm>
    </SubscriptionBox>
  );
};