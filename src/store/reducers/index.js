// third-party
import { combineReducers } from 'redux';

// project import
import users from './users';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  users,
});

export default reducers;
