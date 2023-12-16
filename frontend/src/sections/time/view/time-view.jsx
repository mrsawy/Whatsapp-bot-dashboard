/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
// import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PublishIcon from '@mui/icons-material/Publish';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// import Label from '../../../components/label/label'

// ----------------------------------------------------------------------
// const timeInDubai = moment().tz('Asia/Dubai');

export default function ProductsView() {
  const [time, setTime] = useState({ from: 0, to: 0 });
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Here You Can Customize The Working Hours 👋
      </Typography>
      <div className="flex flex-row flex-wrap gap-28 mt-20 justify-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="from_time">From</label>
          <TimePicker
            id="from_time"
            style={{ outline: `none` }}
            value={time?.from ? moment.utc(time.from) : null}
            onChange={(newValue) => setTime((prev) => ({ ...prev, from: newValue }))}
          />
        </div>
        {/* ---------------- */}
        <div className="flex flex-col gap-2">
          <label htmlFor="to_time">To</label>
          <TimePicker
            id="to_time"
            style={{ outline: `none` }}
            value={time?.to ? moment.utc(time.to) : null}
            onChange={(newValue) => setTime((prev) => ({ ...prev, to: newValue }))}
          />
        </div>
      </div>
      <Box className="flex justify-center items-center mt-28 ">
        <Button
          onClick={() => {
            // console.log(time.from.hour());
            // console.log(time.from);  

            console.log(moment.utc(time.from).tz('Africa/Cairo').format('hh:mm A'));
         
          }}
          className=" mb-4 px-4 py-3"
          variant="contained"
          endIcon={<PublishIcon />}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
