import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../data/AppContext';
import { OnePostDto } from '../../data/news/PostDto';
import { LoadingValue, LoadingValueLoading } from '../../data/load/LoadedState';
import { useParams } from 'react-router-dom';
import LoadingValueElement from '../../data/load/LoadingValueElement';
import OnePostPageAdmin from './admin/OnePostPageAdmin';
import OnePostPageBasic from './user/OnePostPageBasic';
import s from './OnePostPage.module.sass';

const OnePostPage = () => {
  const { newsStore, userStore, tagsStore } = useContext(AppContext);
  const [post, setPost] = useState<LoadingValue<OnePostDto>>(new LoadingValueLoading(null));
  const { id } = useParams();
  useEffect(() => {
    newsStore.getOnePost(Number(id), setPost);
    tagsStore.loadAll();
  }, []);
  return (
    <div className={s.wrapper}>
      <LoadingValueElement
        state={post}
        loadedLayout={(value) => (
          <div>
            {userStore.isAdmin ? (
              <OnePostPageAdmin post={value} />
            ) : (
              <OnePostPageBasic post={value} />
            )}
          </div>
        )}
      />
    </div>
  );
};

export default OnePostPage;
