/* eslint-disable import/no-extraneous-dependencies */
// import { faker } from '@faker-js/faker';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi Dreams Boat, Welcome back 👋
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Here Goes The Main Massage That Wil Be Sent To The Audience ."
        multiline
        rows={10}
        fullWidth
        variant="outlined"
      />
      <Box width="100%" padding={3} display="flex" justifyContent="center">
        <Button variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}
