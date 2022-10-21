import { createContext } from 'react';
import { NewsStore } from './news/NewsStore';
import { UserStore } from './auth/UserStore';
import { BusinessCardStore } from './businessCard/BusinessCardStore';

export interface IAppContext {
  businessCardStore: BusinessCardStore;
  newsStore: NewsStore;
  userStore: UserStore;
}

export const AppContext = createContext<IAppContext>(null!);
