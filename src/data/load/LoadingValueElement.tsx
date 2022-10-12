import React, { ReactNode } from 'react';
import { LoadingValue, LoadingValueError, LoadingValueState } from './LoadedState';
import { CircularProgress, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import s from './LoadingValueElement.module.sass';
import axios from 'axios';

interface LoadedStateElementProps<T> {
  state: LoadingValue<T>;
  loadedLayout: (value: T) => ReactNode;
}

const LoadingValueElement = observer(<T,>({ state, loadedLayout }: LoadedStateElementProps<T>) => {
  switch (state.state) {
    case LoadingValueState.Loading:
      return (
        <div className={s.wrapper}>
          {state.value != null && (
            <div className={s.contentContainer}>
              <div>{loadedLayout(state.value!)}</div>
            </div>
          )}
          <div className={s.circularContainer}>
            <CircularProgress />
          </div>
        </div>
      );
    case LoadingValueState.Loaded:
      return <div>{loadedLayout(state.value!)}</div>;
    default: {
      //TODO: add error text
      let errorMessage = 'Error! ';
      const error = (state as LoadingValueError<T>).error;
      if (error && axios.isAxiosError(error)) {
        errorMessage += error.message;
      }
      return (
        <div>
          <Typography variant='h6'>{errorMessage}</Typography>
        </div>
      );
    }
  }
});

export default LoadingValueElement;
