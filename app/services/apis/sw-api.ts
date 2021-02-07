import { Api } from './api';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Person, Starship } from './../../models';

const apiConfig = {
  returnRejectedPromiseOnError: true,
  timeout: 10000,
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    common: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
};

export class SWApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  public getPerson(id: number): Promise<Person> {
    return this.get<string, AxiosResponse<Person>>(
      `https://swapi.dev/api/people/${id}`,
    ).then(this.success);
  }

  public getStarship(id: number): Promise<Starship> {
    return this.get<string, AxiosResponse<Starship>>(
      `https://swapi.dev/api/starships/${id}`,
    ).then(this.success);
  }
}

export const swApi = new SWApi(apiConfig);
