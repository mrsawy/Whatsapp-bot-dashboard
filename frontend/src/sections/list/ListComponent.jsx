/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

import {editListItem, deleteListItem } from 'src/store/list/listSlice';

function ListComponent({ id, body, reply }) {
  // const { list } = useSelector((s) => s.list);
  const [msgData, setMsgData] = useState({ body, reply });
  const dispatch = useDispatch();

  return (
    <Box className="flex flex-row justify-center items-center gap-3">
      <Box className="flex flex-column gap-4">
        <TextField
          onChange={(event) => {
            const val = event.target.value;
            setMsgData((prev) => ({ ...prev, body: val }));
            dispatch(editListItem({ id, body: val, reply: msgData.reply }));
          }}
          label="Massage Body"
          defaultValue={body}
          multiline
        />
        <TextField
          onChange={(event) => {
            const val = event.target.value;
            setMsgData((prev) => ({ ...prev, reply: val }));
            dispatch(editListItem({ id, reply: val, body: msgData.reply }));
          }}
          label="Massage Reply"
          defaultValue={reply}
          multiline
          rows={6}
        />
      </Box>
      <button
        onClick={() => {
          dispatch(deleteListItem(id));
        }}
        type="button"
        className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <DeleteIcon />
      </button>
    </Box>
  );
}

ListComponent.propTypes = {
  body: PropTypes.string,
  reply: PropTypes.string,
  id: PropTypes.string,
};
export default ListComponent;
