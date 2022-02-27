import Sesion from '../components/Sesion';
import  Home  from '../components/Home';
import  Perfil from '../components/Perfil';
import Api from '../components/Api';


export const MenuItems = [
  { 
    id: 1,
    path:'/',
    title:'Home',
    component: Home,
  },
  {
    id: 2,
    path:'/iniciosesion',
    title: 'Iniciar sesión',
    component: Sesion,
  },
  {
    id: 3,
    path:'/perfil',
    title: 'Mi perfil',
    component: Perfil,
  },
  {
    id: 4,
    path:'/api',
    title: 'Datos F1',
    component: Api,
  },
];

/*
path
id
title
component
*/