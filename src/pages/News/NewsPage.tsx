import React from 'react';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

const NewsPage = observer(() => {
  return (
    <div>
      <Typography>This is the news page</Typography>
      <Typography>{process.env.API_URL}</Typography>
    </div>
  );
});

export default NewsPage;
