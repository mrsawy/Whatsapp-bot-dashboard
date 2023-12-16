/* eslint-disable perfectionist/sort-imports */
/* eslint-disable import/no-unresolved */

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// import 'src/global.css';
import './global.css';
// import '../scss/styles.scss'
// import * from 'bootstrap'

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
