import React, { useContext } from 'react';
import s from './OnePostPage.module.sass';
import { OnePostContext } from '../../data/onePost/OnePostContext';
import { OnePostStore } from '../../data/onePost/OnePostStore';
import { AppContext } from '../../data/AppContext';
import OnePostPageAdmin from './admin/OnePostPageAdmin';
import OnePostPageUser from './user/OnePostPageUser';
import { observer } from 'mobx-react-lite';

const OnePostPage = observer(() => {
  const { userStore } = useContext(AppContext);
  return (
    <div className={s.wrapper}>
      <OnePostContext.Provider value={{ onePostStore: new OnePostStore() }}>
        {userStore.isAdmin ? <OnePostPageAdmin /> : <OnePostPageUser />}
      </OnePostContext.Provider>
    </div>
  );
});

export default OnePostPage;
