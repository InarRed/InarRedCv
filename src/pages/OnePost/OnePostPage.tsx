import React, { useContext, useState } from 'react';
import s from './OnePostPage.module.sass';
import { OnePostStore } from '../../data/onePost/OnePostStore';
import { AppContext } from '../../data/AppContext';
import OnePostPageAdmin from './admin/OnePostPageAdmin';
import OnePostPageUser from './user/OnePostPageUser';
import { observer } from 'mobx-react-lite';
import { OnePostContext } from '../../data/onePost/OnePostContext';

const OnePostPage = observer(() => {
  const { userStore } = useContext(AppContext);
  const [store] = useState(new OnePostStore());
  return (
    <div className={s.wrapper}>
      <OnePostContext.Provider value={{ onePostStore: store }}>
        {userStore.isAdmin ? <OnePostPageAdmin /> : <OnePostPageUser />}
      </OnePostContext.Provider>
    </div>
  );
});

export default OnePostPage;
