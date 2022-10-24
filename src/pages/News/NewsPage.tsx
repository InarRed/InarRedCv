import React, { useContext, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../../data/AppContext';
import LoadingValueElement from '../../data/load/LoadingValueElement';
import PostItem from './PostItem';
import { useSearchParams } from 'react-router-dom';

//TODO: убрать observer
const NewsPage = observer(() => {
  const { newsStore } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageString = searchParams.get('page');
  const page = pageString ? Number(pageString) : 1;

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  useEffect(() => {
    newsStore.loadAll(page, 20); //.then(() => window.scrollTo({ top: 0 }));
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <LoadingValueElement
      state={newsStore.Posts}
      loadedLayout={(value) => (
        <div>
          {value.data.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
          <Pagination count={value.pageCount} page={page} onChange={changePage}></Pagination>
        </div>
      )}
    />
  );
});

export default NewsPage;
