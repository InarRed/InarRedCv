import React, { useContext, useEffect, useState } from 'react';
import { OnePostDto } from '../../../data/news/PostDto';
import { Box, Tab, Tabs } from '@mui/material';
import PostEditor from './PostEditor';
import { AppContext } from '../../../data/AppContext';
import OnePostPageUserView from '../user/OnePostPageUserView';
import { OnePostContext } from '../../../data/onePost/OnePostContext';
import { useParams } from 'react-router-dom';
import LoadingValueElement from '../../../data/load/LoadingValueElement';
import { observer } from 'mobx-react-lite';

const OnePostPageAdmin = observer(() => {
  const { tagsStore } = useContext(AppContext);
  const { onePostStore } = useContext(OnePostContext);
  const { id } = useParams();

  const [tab, setTab] = useState('result');

  useEffect(() => {
    tagsStore.loadAll();
  }, []);

  useEffect(() => {
    onePostStore.load(Number(id));
  }, [id]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <LoadingValueElement
      state={onePostStore.post}
      loadedLayout={(value) => (
        <>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleChangeTab}>
              <Tab label='Result' value={'result'} />
              <Tab label='Editor' value={'editor'} />
            </Tabs>
          </Box>
          {tab == 'editor' ? <PostEditor post={value} /> : <OnePostPageUserView post={value} />}
        </>
      )}
    />
  );
});

export default OnePostPageAdmin;
