import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdPersonAdd,
  MdPlaylistAdd,
  MdAssignmentAdd
} from 'react-icons/md';

const routes = [
  {
    name: 'Dashboard',
    layout: '/despachante',
    path: 'dashboard',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Abrir Ficha',
    layout: '/despachante',
    path: 'ficha/criar',
    icon: <MdAssignmentAdd className="h-6 w-6" />
  },
  {
    name: 'Novo Serviço',
    layout: '/despachante',
    path: 'servico/criar',
    icon: <MdPlaylistAdd className="h-6 w-6" />,
  },
  {
    name: 'Adicionar Usuário',
    layout: '/despachante',
    path: 'usuario/novo',
    icon: <MdPersonAdd className="h-6 w-6" />,
  },
  {
    name: 'Cadastrar Cliente',
    layout: '/despachante',
    path: 'cliente/criar',
    icon: <MdPersonAdd className="h-6 w-6" />,
  },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/despachante',
  //   path: 'nft-marketplace',
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,

  //   secondary: true,
  // },
  {
    name: 'Data Tables',
    layout: '/despachante',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    name: 'Profile',
    layout: '/despachante',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: 'rtl-default',
  //   icon: <MdHome className="h-6 w-6" />,
  // },
];
export default routes;
