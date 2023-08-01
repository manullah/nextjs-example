import { TUserParams, TUserPayload } from './types/request';
import { TUserDetailResponse, TUserPaginateResponse, TUserResponse } from './types/entity';
import axios from '@/utils/axios';
import { MASTERDATA_USER_ENDPOINT } from './constant';

export const fetchUsers = async (params: TUserParams) => {
  const result = await axios.get<TUserPaginateResponse>(`${MASTERDATA_USER_ENDPOINT}`, { params });
  return result.data;
};

export const fetchUserDetails = async (id: TUserResponse['id']) => {
  const result = await axios.get<TUserDetailResponse>(`${MASTERDATA_USER_ENDPOINT}/${id}`);
  return result.data;
};

export const createUser = async (payload: TUserPayload) => {
  const result = await axios.post<TUserDetailResponse>(`${MASTERDATA_USER_ENDPOINT}`, payload);
  return result.data;
};

export const updateUser = async (id: TUserResponse['id'], payload: TUserPayload) => {
  const result = await axios.patch<TUserDetailResponse>(`${MASTERDATA_USER_ENDPOINT}/${id}`, payload);
  return result.data;
};

export const deleteUser = async (id: TUserResponse['id']) => {
  const result = await axios.delete<string>(`${MASTERDATA_USER_ENDPOINT}/${id}`);
  return result.data;
};
