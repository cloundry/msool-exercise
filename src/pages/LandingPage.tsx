import { LanguageSelector } from '@components';
import { Box } from '@mui/material';

export const LandingPage = () => {
  return (
    <Box sx={{ paddingX: { xs: '32px', md: '48px' } }}>
      <LanguageSelector />
    </Box>
  );
};
