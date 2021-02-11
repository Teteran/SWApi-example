import axios from 'axios';
import { swApi } from '../app/apis';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('fetchData', () => {
  afterEach(() => jest.resetAllMocks());
  it('fetches successfully data from an API', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    const person = await swApi.getPerson(1);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(person).toBe(data);
  });

  it('fetches with 404 error', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('404')),
    );

    await expect(swApi.getPerson(999)).rejects.toThrow('404');
  });
});

const data = {
  name: 'Luke Skywalker',
  mass: '77',
};
