import BusinessCardDto from './businessCard/BusinessCardDto';
import { createContext } from 'react';
import { NewsStore } from './news/NewsStore';

export interface IAppContext {
  card?: BusinessCardDto;
  setCard: (card: BusinessCardDto) => void;
  newsStore: NewsStore;
}

export const AppContext = createContext<IAppContext>(null!);
