import { TPaginateResponse, TResponseData } from '@/domains/commons/types/entity';

export type TUserResponse = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TUserPaginateResponse = TPaginateResponse<TUserResponse>;

export type TUserDetailResponse = TResponseData<TUserResponse>;
