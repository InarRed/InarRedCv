import { makeAutoObservable, runInAction } from 'mobx';
import { AuthMessageDto, LoginAnswerDto, LoginDto, RegistrationDto, UserDto } from './AuthDto';
import { $authWrapper, $host } from '../http/axios';
import axios from 'axios';
import { LoadingValue, LoadingValueLoading } from '../load/LoadedState';
import { loadWrapper } from '../load/wrappers/loadWrapper';
import { Role } from './Role';

export class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  //TODO:Add LoadingState and check it everywhere where we use this (f.e. in navbar)
  public user: LoadingValue<UserDto | null> = new LoadingValueLoading(null);

  public get isAdmin(): boolean | null {
    if (this.user.value) {
      return !!this.user.value?.roles.includes(Role.Admin);
    }
    return null;
  }

  public async Login(dto: LoginDto): Promise<AuthMessageDto> {
    try {
      const { data } = await $host.post<LoginAnswerDto>('auth/login', dto);
      localStorage.setItem('access', data.accessToken);
      localStorage.setItem('refresh', data.refreshToken);
      await this.loadProfile();
      return { successful: true, message: 'login was successful' };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response!.status == 401)
          return { successful: false, message: 'Login or password are wrong' };
        else return { successful: false, message: 'Connection error' };
      }
      return { successful: false, message: 'Unknown error' };
    }
  }

  public async Registration(dto: RegistrationDto): Promise<AuthMessageDto> {
    try {
      const { data } = await $host.post<AuthMessageDto>('auth/registration', dto);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e))
        return {
          successful: false,
          message: `Error: ${e.message}`,
        };
      else throw e;
    }
  }

  public async loadProfile() {
    await loadWrapper(
      async () => {
        try {
          return await $authWrapper((a) => a.get<UserDto>('auth/profile'));
        } catch (e) {
          if (axios.isAxiosError(e) && e.response!.status == 401) return null;
          throw e;
        }
      },
      this.user.value,
      (value) => {
        runInAction(() => {
          this.user = value;
        });
      },
    );
  }

  public async logout() {
    try {
      await $authWrapper((a) => a.get('auth/logout'));
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      await this.loadProfile();
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        throw e;
      }
    }
  }
}
