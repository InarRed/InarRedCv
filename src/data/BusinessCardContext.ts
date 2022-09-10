import BusinessCardDto from './dtos/BusinessCardDto';
import { createContext } from 'react';

export interface IAppContext {
  card?: BusinessCardDto;
  setCard: (card: BusinessCardDto) => void;
}

export const InitBusinessCard = () => {
  return {
    skills: [
      {
        name: 'C#',
        comment: 'My main programming language',
        frameworks: [{ name: 'Asp.net' }, { name: 'Entity Framework' }],
      },
      {
        name: 'Kotlin',
        frameworks: [
          { name: 'Android' },
          { name: 'Jetpack Compose', comment: 'React-like framework for android' },
        ],
      },
      {
        name: 'Typescript',
        frameworks: [
          { name: 'React' },
          { name: 'Nest.js', comment: 'Node.js framework for server' },
        ],
      },
      {
        name: 'Other',
        frameworks: [{ name: 'Docker' }, { name: 'Webpack' }],
      },
    ],
  } as BusinessCardDto;
};

export const AppContext = createContext<IAppContext>(null!);
