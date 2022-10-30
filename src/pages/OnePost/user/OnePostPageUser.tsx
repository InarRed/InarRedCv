import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../data/AppContext';
import { useParams } from 'react-router-dom';
import LoadingValueElement from '../../../data/load/LoadingValueElement';
import OnePostPageUserView from './OnePostPageUserView';
import { observer } from 'mobx-react-lite';

const OnePostPageUser = observer(() => {
  const { onePostStore } = useContext(AppContext);
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
