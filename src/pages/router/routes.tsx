import BusinessCard from '../BusinessCard/BusinessCard';
import React from 'react';
import NewsPage from '../News/NewsPage';
import { Navigate } from 'react-router-dom';

export interface RouteItem {
  path: string;
  component: React.ReactNode;
}

export const publicRoutes: RouteItem[] = [
  { path: '/', component: <BusinessCard /> },
  { path: '/news', component: <NewsPage /> },
  { path: '*', component: <Navigate to={'/'} replace /> },
];

export const privateRoutes: RouteItem[] = [
  { path: '/', component: <BusinessCard /> },
  { path: '/news', component: <NewsPage /> },
  { path: '*', component: <Navigate to={'/'} replace /> },
];
