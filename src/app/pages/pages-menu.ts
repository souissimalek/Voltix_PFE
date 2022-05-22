import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Options',
    group: true,
  },



  {
    title: 'Calendrier',
    icon: 'keypad-outline',
    
    link: '/pages/extra-components/calendar',
 
  },
  {
    title: 'Chat',
    icon: 'message-circle-outline',
    link: '/pages/extra-components/chat',
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
     
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
     
    ],
  },
  {
    title: 'Prévisions',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Estimation Génerale',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'Prévision Siège',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Bloc Note',
    icon: 'text-outline',
    link: '/pages/editors/tinymce',
   
  },
  {
    title: 'Liste des Utilisateurs',
    icon: 'grid-outline',
    link: '/pages/tables/smart-table',
  },
  
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
