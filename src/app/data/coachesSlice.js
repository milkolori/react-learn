import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  'Mildred Aranda',
  'Deidre Blascyk',
  'Deidre Blascyk',
  'Britania Grajeda Esparza'
];

const coachesSlice = createSlice({
  name: 'coaches',
  initialState,
  reducers: {}
})
export default coachesSlice.reducer;