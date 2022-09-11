import React from 'react';
import s from './BasicLayout.module.sass';
import NavBar from './NavBar/NavBar';
import BusinessCard from './BusinessCard/BusinessCard';

const BasicLayout = () => {
  return (
    <div className={s.flexContainer}>
      <header className={s.header}>
        <NavBar />
      </header>
      <div className={s.mainContainer}>
        <aside className={s.leftAside} />
        <section className={s.mainContent}>
          <BusinessCard />
        </section>
        <aside className={s.rightAside} />
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default BasicLayout;
