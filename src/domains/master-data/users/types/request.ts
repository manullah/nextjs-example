import { TDefaultParams } from '@/domains/commons/types/request';

export type TUserParams = TDefaultParams;

export type TUserPayload = {
  name: string;
  email: string;
  password: string;
};
