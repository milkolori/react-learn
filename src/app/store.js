import { configureStore } from '@reduxjs/toolkit';
import caregiversReducer from '../features/caregiver-list/caregiversSlice';
import coachesReducer from './data/coachesSlice';
import statesReducer from './data/statesSlice';

export default configureStore({
  reducer: {
    caregivers: caregiversReducer,
    coaches: coachesReducer,
    states: statesReducer
  },
});
