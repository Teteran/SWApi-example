import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export class Api {
  constructor(config?: AxiosRequestConfig) {
    axios.create(config);
  }

  get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return axios.get(url, config);
  }

  success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  error<T>(error: AxiosError<T>): void {
    throw error;
  }
}
