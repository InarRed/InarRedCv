import { createContext } from 'react';
import { NewsStore } from './news/NewsStore';
import { UserStore } from './auth/UserStore';
import { BusinessCardStore } from './businessCard/BusinessCardStore';
import { TagsStore } from './tags/TagsStore';

export interface IAppContext {
  businessCardStore: BusinessCardStore;
  newsStore: NewsStore;
  userStore: UserStore;
  tagsStore: TagsStore;
}

export const AppContext = createContext<IAppContext>(null!);
