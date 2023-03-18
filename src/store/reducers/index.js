// third-party
import { combineReducers } from 'redux';

// project import
import snackbar from './snackbar';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  snackbar,
});

export default reducers;
