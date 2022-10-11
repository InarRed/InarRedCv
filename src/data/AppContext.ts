import BusinessCardDto from './dtos/BusinessCardDto';
import { createContext } from 'react';
import { NewsStore } from './NewsStore';

export interface IAppContext {
  card?: BusinessCardDto;
  setCard: (card: BusinessCardDto) => void;
  newsStore: NewsStore;
}

export const AppContext = createContext<IAppContext>(null!);
