import React, { useContext, useEffect } from 'react';
import { AppContext } from '../data/AppContext';
import BasicLayout from './BasicLayout';

const LoginAppWrapper = () => {
  const { userStore } = useContext(AppContext);
  useEffect(() => {
    console.log('Start loading profile');
    const result = userStore.loadProfile();
    result.then(() => console.log('end loading'));
    result.catch((e) => console.log(`Error loading profile${e}`));
  });
  // useEffect(() => {
  //   userStore.getProfile();
  // }, []);
  return <BasicLayout />;
};

export default LoginAppWrapper;
