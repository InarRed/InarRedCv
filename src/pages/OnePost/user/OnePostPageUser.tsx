import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../data/AppContext';
import { useParams } from 'react-router-dom';
import { OnePostContext } from '../../../data/onePost/OnePostContext';
import LoadingValueElement from '../../../data/load/LoadingValueElement';
import OnePostPageAdmin from '../admin/OnePostPageAdmin';
import OnePostPageUserView from './OnePostPageUserView';
import { observer } from 'mobx-react-lite';

const OnePostPageUser = observer(() => {
  const { onePostStore } = useContext(OnePostContext);
  const { id } = useParams();
  useEffect(() => {
    onePostStore.load(Number(id));
  }, [id]);
  return (
    <LoadingValueElement
      state={onePostStore.post}
      loadedLayout={(value) => <OnePostPageUserView post={value} />}
    />
  );
});

export default OnePostPageUser;
