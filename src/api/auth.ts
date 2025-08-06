import client from './client';

export interface LoginResponse {
  message: string;
  home_page: string;
  full_name: string;
  sid?: string;
}

export const login = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const formData = new FormData();
  formData.append('usr', email);
  formData.append('pwd', password);

  const response = await client.post<LoginResponse>('/login', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
