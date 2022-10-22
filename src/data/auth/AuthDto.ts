import { Role } from './Role';

export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginAnswerDto {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshAnswerDto {
  accessToken: string;
  refreshToken: string;
}

export interface RegistrationDto {
  username: string;
  email: string;
  password: string;
}

export interface AuthMessageDto {
  successful: boolean;
  message: string;
}

export interface UserDto {
  username: string;
  roles: Role[];
}
