import { createContext } from 'react';
import { NewsStore } from './news/NewsStore';
import { UserStore } from './auth/UserStore';
import { BusinessCardStore } from './businessCard/BusinessCardStore';
import { TagsStore } from './tags/TagsStore';
import { OnePostStore } from './onePost/OnePostStore';

export interface IAppContext {
  businessCardStore: BusinessCardStore;
  newsStore: NewsStore;
  userStore: UserStore;
  tagsStore: TagsStore;
  onePostStore: OnePostStore;
}

export const AppContext = createContext<IAppContext>(null!);
