import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import NewsPageLoader from '../NewsPageLoader';
import NewsPageListEditor from './NewsPageListEditor';

const NewsPageAdmin = () => {
  const [tab, setTab] = useState('published');
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label='Published' value={'published'} />
          <Tab label='Not published' value={'notPublished'} />
        </Tabs>
      </Box>
      {tab == 'published' ? <NewsPageLoader published={true} /> : <NewsPageListEditor />}
    </div>
  );
};

export default NewsPageAdmin;
