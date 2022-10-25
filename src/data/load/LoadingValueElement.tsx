import React, { ReactNode } from 'react';
import { LoadingValue, LoadingValueError, LoadingValueState } from './LoadedState';
import { CircularProgress, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import s from './LoadingValueElement.module.sass';
import axios from 'axios';

interface LoadedStateElementProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  state: LoadingValue<T>;
  loadedLayout: (value: T) => ReactNode;
}

const LoadingValueElement = observer(
  <T,>({ state, loadedLayout, className, ...divProps }: LoadedStateElementProps<T>) => {
    switch (state.state) {
      case LoadingValueState.Loading:
        return (
          <div className={s.wrapper} {...divProps}>
            {state.value != null && (
              <div className={[s.contentContainer, className].join(' ')}>
                {loadedLayout(state.value!)}
              </div>
            )}
            <div className={s.circularContainer}>
              <CircularProgress />
            </div>
          </div>
        );
      case LoadingValueState.Loaded:
        return (
          <div className={className} {...divProps}>
            {loadedLayout(state.value!)}
          </div>
        );
      default: {
        //TODO: add error text
        let errorMessage = 'Error! ';
        const error = (state as LoadingValueError<T>).error;
        if (error && axios.isAxiosError(error)) {
          errorMessage += error.message;
        }
        return (
          <div className={className} {...divProps}>
            <Typography variant='h6'>{errorMessage}</Typography>
          </div>
        );
      }
    }
  },
);

export default LoadingValueElement;
