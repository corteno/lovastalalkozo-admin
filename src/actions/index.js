import axios from 'axios';
import RootApiUrl from '../utils/RootApiUrl';

export const GET_CANDIDATES = 'get_candidates';
export const DELETE_CANDIDATE = 'delete_candidate';

export const getCandidates = () => {
  const request = axios.get(`${RootApiUrl}/candidates`);

  return {
      type: GET_CANDIDATES,
      payload: request
  }
};

export const deleteCandidate = (id) => {
    const request = axios.delete(`${RootApiUrl}/candidate/${id}`);

    return {
        type: DELETE_CANDIDATE,
        payload: request
    }

};