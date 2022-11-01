import { BusinessCardDto } from './BusinessCardDto';
import { makeAutoObservable, runInAction } from 'mobx';
import { LoadingValue, LoadingValueLoaded, LoadingValueLoading } from '../load/LoadedState';

const InitBusinessCard = () => {
  return {
    name: 'Semyon Falitsyn',
    myDescription:
      "I like to learn new technologies and use them in my projects. I'm good at getting along with people",
    contacts: [
      {
        name: 'github',
        ref: 'https://github.com/InarBelkin',
      },
      {
        name: 'Inar2000s@gmail.com',
        ref: 'mailto:Inar2000s@gmail.com',
      },
      {
        name: 'hh.ru',
        ref: 'https://ivanovo.hh.ru/resume/538c44bbff09ec70ef0039ed1f5367676d7a65',
      },
      {
        name: 'skype',
        ref: 'https://join.skype.com/invite/LRKHPjzCdP3u',
      },
    ],
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
    projects: [
      {
        name: 'Kicker',
        description: 'mobile application for organizing kicker games',
        hrefs: [
          {
            name: 'android-app',
            ref: 'https://github.com/InarBelkin/KickerCompose',
          },
          {
            name: 'server',
            ref: 'https://github.com/InarBelkin/KickerServer',
          },
        ],
        technologies: [
          'Asp.net',
          'Entity Framework',
          'PostgresSql',
          'Redis',
          'SignalR',
          'Jetpack Compose',
        ],
      },
      {
        name: 'Strange news site',
        description: 'Not very good site on nest.js',
        hrefs: [{ name: 'click', ref: 'https://github.com/InarBelkin/VetLabNewsJs' }],
        technologies: ['React', 'Nest.js'],
      },
      {
        name: 'This site',
        description: 'you are here',
        hrefs: [{ name: 'click', ref: 'https://github.com/InarBelkin/CVViewer' }],
        technologies: ['React', 'Webpack', 'Material ui'],
      },
    ],
  } as BusinessCardDto;
};

export class BusinessCardStore {
  constructor() {
    makeAutoObservable(this);
  }

  businessCard: LoadingValue<BusinessCardDto> = new LoadingValueLoading(null);

  loadBusinessCard() {
    runInAction(() => {
      this.businessCard = new LoadingValueLoaded(InitBusinessCard());
    });
  }
}
