import React, { useContext, useState } from 'react';
import { OnePostDto } from '../../../data/news/PostDto';
import { Box, Tab, Tabs } from '@mui/material';
import PostEditor from './PostEditor';
import { AppContext } from '../../../data/AppContext';
import OnePostPageBasic from '../user/OnePostPageBasic';

interface OnePostPageAdmin {
  post: OnePostDto;
}

const OnePostPageAdmin = ({ post }: OnePostPageAdmin) => {
  const [editingPost, setEditingPost] = useState(post);
  const [tab, setTab] = useState('result');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label='Result' value={'result'} />
          <Tab label='Editor' value={'editor'} />
        </Tabs>
      </Box>
      {tab == 'editor' ? (
        <PostEditor post={editingPost} setPost={setEditingPost} />
      ) : (
        <OnePostPageBasic post={editingPost} />
      )}
    </div>
  );
};

export default OnePostPageAdmin;
