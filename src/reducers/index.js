import { combineReducers } from 'redux';
import CandidatesReducer from './reducer_candidates';

const rootReducer = combineReducers({
  candidates: CandidatesReducer
});

export default rootReducer;
