import { OnePostStore } from './OnePostStore';
import { createContext } from 'react';

export interface IOnePostContext {
  onePostStore: OnePostStore;
}

export const OnePostContext = createContext<IOnePostContext>(null!);
