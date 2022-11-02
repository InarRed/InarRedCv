import React, { useState } from 'react';
import s from './BasicLayout.module.sass';
import NavBar from './NavBar/NavBar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/routes';

const BasicLayout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const routes = isAuth ? privateRoutes : publicRoutes;
  return (
    <HashRouter>
      <div className={s.flexContainer}>
        <header className={s.header}>
          <NavBar />
        </header>
        <div className={s.mainContainer}>
          <aside className={s.leftAside} />
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.component} key={route.path}></Route>
            ))}
          </Routes>
          <aside className={s.rightAside} />
        </div>
        <div className={s.footer}></div>
      </div>
    </HashRouter>
  );
};

export default BasicLayout;
