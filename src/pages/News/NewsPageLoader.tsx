import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../data/AppContext';
import { useSearchParams } from 'react-router-dom';
import s from './NewsPage.module.sass';
import LoadingValueElement from '../../data/load/LoadingValueElement';
import { Pagination, Typography } from '@mui/material';
import PostItem from './PostItem';
import NewsSidePanel from './sidePanel/NewsSidePanel';
import { observer } from 'mobx-react-lite';

interface NewsPageLoaderProps {
  published: boolean;
}

const NewsPageLoader = observer(({ published }: NewsPageLoaderProps) => {
  const { newsStore } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageString = searchParams.get('page');
  const page = pageString ? Number(pageString) : 1;

  const tag = searchParams.get('tag');

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  useEffect(() => {
    newsStore.loadAll(page, 10, published, tag ?? undefined);
    window.scrollTo({ top: 0 });
  }, [page, tag]);

  return (
    <LoadingValueElement
      state={newsStore.Posts}
      loadedLayout={(value) => (
        <>
          {value.data.length == 0 && <Typography variant='h5'>Here are no posts yet.</Typography>}
          {value.data.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
          <Pagination count={value.pageCount} page={page} onChange={changePage}></Pagination>
        </>
      )}
    />
  );
});

export default NewsPageLoader;
