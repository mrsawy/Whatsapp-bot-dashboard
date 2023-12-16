/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PublishIcon from '@mui/icons-material/Publish';

import createId from 'src/utils/createID';

import { addListItem } from 'src/store/list/listSlice';

import ListComponent from './ListComponent';

function ListGroup() {
  const { list } = useSelector((s) => s.list);
  const dispatch = useDispatch();

  const handleAddNew = () => {
    dispatch(addListItem({ id: createId(), body: '', reply: '' }));
  };

  return (
    <>
      <Box className="flex justify-end items-end ">
        <Button
          onClick={handleAddNew}
          className=" mb-4 px-4 py-3"
          style={{ fontSize: `0.99rem` }}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Add New
        </Button>
      </Box>
      <Box className="flex flex-row flex-wrap justify-start items-center gap-5 ">
        {list.map((d) => (
          <ListComponent key={d?.id} id={d?.id} body={d?.body} reply={d?.reply} />
        ))}
      </Box>

      <Box className="flex justify-center items-center mt-6 ">
        <Button
          className=" mb-4 px-4 py-3"
          variant="contained"
          endIcon={<PublishIcon />}
          onClick={() => {
            console.log(list);
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default ListGroup;
