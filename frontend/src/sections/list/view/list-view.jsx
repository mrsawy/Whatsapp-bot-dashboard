/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { setList } from 'src/store/list/listSlice';

import ListGroup from '../ListGroup';

const data = [
  { id: `1`, body: `test`, reply: `test` },
  { id: `2`, body: `test`, reply: `test` },
];
// ---------------------------------------------
export default function ListView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setList(data));
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Here You Can Customize The Auto List 👋
      </Typography>

      <ListGroup />
    </Container>
  );
}
