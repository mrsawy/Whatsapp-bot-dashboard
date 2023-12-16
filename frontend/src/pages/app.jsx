import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dreams Boats Whatsapp Bot </title>
      </Helmet>

      <AppView />
    </>
  );
}
