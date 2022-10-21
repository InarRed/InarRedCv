import React, { useContext, useEffect } from 'react';
import { AppContext } from '../data/AppContext';
import BasicLayout from './BasicLayout';
import {useMount} from "../utils/useMount";

const LoginAppWrapper = () => {
  const { userStore } = useContext(AppContext);
  useMount(() => {
    userStore.loadProfile();
  });
  // useEffect(() => {
  //   userStore.getProfile();
  // }, []);
  return <BasicLayout />;
};

export default LoginAppWrapper;
