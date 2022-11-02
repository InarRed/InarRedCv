import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../../data/AppContext';
import s from './NewsPage.module.sass';
import NewsSidePanel from './sidePanel/NewsSidePanel';
import NewsPageAdmin from './admin/NewsPageAdmin';
import NewsPageUser from './user/NewsPageUser';

const NewsPage = observer(() => {
  const { userStore } = useContext(AppContext);

  return (
    <div className={s.wrapper}>
      <div className={s.mainPanel}>{userStore.isAdmin ? <NewsPageAdmin /> : <NewsPageUser />}</div>
      <NewsSidePanel />
    </div>
  );
});

export default NewsPage;
