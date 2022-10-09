import React, { useState } from 'react';
import s from './BasicLayout.module.sass';
import NavBar from './NavBar/NavBar';
import BusinessCard from './BusinessCard/BusinessCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/routes';

const BasicLayout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const routes = isAuth ? privateRoutes : publicRoutes;
  return (
    <BrowserRouter>
      <div className={s.flexContainer}>
        <header className={s.header}>
          <NavBar />
        </header>
        <div className={s.mainContainer}>
          <aside className={s.leftAside} />
          <section className={s.mainContent}>
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={route.component} key={route.path}></Route>
              ))}
            </Routes>
          </section>
          <aside className={s.rightAside} />
        </div>
        <div className={s.footer}></div>
      </div>
    </BrowserRouter>
  );
};

export default BasicLayout;
