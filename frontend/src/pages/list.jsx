import { Helmet } from 'react-helmet-async';

// import { UserView } from 'src/sections/user/view';
import { ListView } from 'src/sections/list/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ListView />
    </>
  );
}
