/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable perfectionist/sort-imports */
import axios from 'axios';
import { base_url } from 'src/utils/base_url';

export const getMainMessage = async () => {
  try {
    const response = await axios.get(`${base_url}/api/main`);
    console.log(`err`, response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  return {};
};
export const postMainMessage = async (args) => {
  try {
    const response = await axios.put(`${base_url}/api/main`, { main: args });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
  return {};
};
