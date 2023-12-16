import SvgColor from 'src/components/svg-color';
// import EmailIcon from '@mui/icons-material/Email';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Main Massage',
    path: '/',
    icon: icon('main'),
  },
  {
    title: 'Massages List',
    path: '/list',
    icon: icon('list'),
  },
  {
    title: 'Working Hours',
    path: '/time',
    icon: icon('ic_cart'),
  },
  {
    title: 'Images',
    path: '/images',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
