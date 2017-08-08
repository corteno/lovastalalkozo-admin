import axios from 'axios';
import RootApiUrl from '../utils/RootApiUrl';

export const GET_CANDIDATES = 'get_candidates';

export const getCandidates = () => {
  const request = axios.get(`${RootApiUrl}/candidates`);

  return {
      type: GET_CANDIDATES,
      payload: request
  }
};