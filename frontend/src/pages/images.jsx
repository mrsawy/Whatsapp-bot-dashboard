import { Helmet } from 'react-helmet-async';

import { ImagesView } from 'src/sections/images/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <ImagesView />
    </>
  );
}
