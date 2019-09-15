import React from 'react';

// const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Dataform = React.lazy(() => import('./views/Setup/Dataform'));
const ListJenisRekening = React.lazy(() => import('./views/Setup/ListJenisRekening'));
const AddJenisRekening = React.lazy(() => import('./views/Setup/AddJenisRekening'));
const Jurnalumum = React.lazy(() => import('./views/Jurnal/ListJurnalUmum'));
const AddJurnalumum = React.lazy(() => import('./views/Jurnal/AddJurnalUmum'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/setup', exact: true, name: 'Setup', component: Dataform },
  { path: '/setup/dataform', name: 'DataForm', component: Dataform },
  { path: '/setup/listjenisrekening', name: 'ListJenisRekening', component: ListJenisRekening },
  { path: '/setup/addjenisrekening', name: 'AddJenisRekening', component: AddJenisRekening },
  { path: '/jurnal/listjurnalumum', name: 'Jurnalumum', component: Jurnalumum },
  { path: '/jurnal/addjurnalumum', name: 'AddJurnalumum', component: AddJurnalumum },
];

export default routes;
