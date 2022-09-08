import React from 'react';
import s from './BasicLayout.module.sass';
import NavBar from './NavBar/NavBar';

const BasicLayout = () => {
  return (
    <div className={s.flexContainer}>
      <header className={s.header}>
        <NavBar />
      </header>
      <div className={s.mainContainer}>
        <aside className={s.leftAside} />
        <section className={s.mainContent}></section>
        <aside className={s.rightAside} />
      </div>
      <div className={s.footer}>footer</div>
    </div>
  );
};

export default BasicLayout;
