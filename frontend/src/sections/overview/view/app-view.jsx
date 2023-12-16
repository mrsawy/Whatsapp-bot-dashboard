/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// import { faker } from '@faker-js/faker';
import Swal from 'sweetalert2';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { getMain, setMain, setIsSet, setMainThunk } from 'src/store/main/mainSlice';

// ----------------------------------------------------------------------

export default function AppView() {
  const dispatch = useDispatch();
  const { main, msgIsSet, isLoading, isError, message } = useSelector((s) => s.main);
  useEffect(() => {
    dispatch(getMain());
  }, [dispatch]);
  useEffect(() => {
    if (msgIsSet) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Massage Is Set',
      }).then(() => {
        dispatch(setIsSet(false));
      });
    }

    if (isError) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: message,
      });
    }
  }, [isError, message, dispatch, msgIsSet]);
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
        value={main}
        onChange={(newValue) => {
          dispatch(setMain(newValue.target.value));
        }}
      />
      <Box width="100%" padding={3} display="flex" justifyContent="center">
        <Button
          onClick={() => {
            dispatch(setMainThunk(main));
          }}
          variant="contained"
          endIcon={!isLoading ? <SendIcon /> : null}
        >
          {!isLoading ? `Submit` : <CircularProgress />}
        </Button>
      </Box>
    </Container>
  );
}
