import React, { useContext, useEffect } from 'react';
import { Button, Chip, Pagination, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../../data/AppContext';
import LoadingValueElement from '../../data/load/LoadingValueElement';
import PostItem from './PostItem';
import { useSearchParams } from 'react-router-dom';
import s from './NewsPage.module.sass';
import { BorderedCard } from '../../components/BorderedCard/BorderedCard';
import NewsSidePanel from './sidePanel/NewsSidePanel';

const NewsPage = observer(() => {
  const { newsStore } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageString = searchParams.get('page');
  const page = pageString ? Number(pageString) : 1;

  const tag = searchParams.get('tag');

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  useEffect(() => {
    newsStore.loadAll(page, 10, tag ?? undefined);
    window.scrollTo({ top: 0 });
  }, [page, tag]);

  return (
    <div className={s.wrapper}>
      <div className={s.mainPanel}>
        <LoadingValueElement
          state={newsStore.Posts}
          loadedLayout={(value) => (
            <>
              {value.data.length == 0 && (
                <Typography variant='h5'>Here are no posts yet.</Typography>
              )}
              {value.data.map((post) => (
                <PostItem post={post} key={post.id} />
              ))}
              <Pagination count={value.pageCount} page={page} onChange={changePage}></Pagination>
            </>
          )}
        />
      </div>
      <NewsSidePanel />
    </div>
  );
});

export default NewsPage;
