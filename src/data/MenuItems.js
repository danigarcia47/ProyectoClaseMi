import Home from '../components/Home';
import { Perfil } from '../components/Perfil';


export const MenuItems = [
  { 
    id: 1,
    path:'/',
    title:'Home',
    component: Home,
  },
  {
    id: 2,
    path:'/perfil',
    title: 'Perfil',
    component: Perfil,
  },
];

/*
path
id
title
component
*/