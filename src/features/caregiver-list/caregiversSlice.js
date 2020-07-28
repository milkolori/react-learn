import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
      "id": 1094,
      "firstName": "Caregiver",
      "lastName": "20200721053305",
      "email": "tes1@example.com.com",
      "state": "VA",
      "zip": "22201",
      "agencyName": "RCI",
    },
    {
      "id": 1085,
      "firstName": "Bertha",
      "lastName": "Mejia",
      "email": "tes2@example.com",
      "state": "TX",
      "zip": "78542",
      "agencyName": "RCI",
      "coach": "Mildred Aranda"
    },
    {
      "id": 1078,
      "firstName": "Julissa",
      "lastName": "Rubio",
      "email": "tes3@example.com",
      "state": "NM",
      "zip": "88007",
      "agencyName": "RCI",
      "coach": "Mildred Aranda"
    },
    {
      "id": 1079,
      "firstName": "Angelica",
      "lastName": "Gasca",
      "email": "tes3@example.com",
      "state": "TX",
      "zip": "79932",
      "agencyName": "RCI",
      "coach": "Mildred Aranda"
    },
    {
      "id": 1082,
      "firstName": "Destiny",
      "lastName": "Gutshall",
      "email": "tes4@example.com",
      "state": "VA",
      "zip": "24445",
      "agencyName": "RCI",
      "coach": "Deidre Blascyk"
    },
    {
      "id": 1068,
      "firstName": "Bobbie Jo",
      "lastName": "Merrill",
      "email": "tes5@example.com",
      "state": "PA",
      "zip": "16922",
      "agencyName": "RCI",
      "coach": "Deidre Blascyk"
    },
    {
      "id": 1071,
      "firstName": "Jaimeisha",
      "lastName": "Johnson",
      "email": "test6@example.com",
      "state": "VA",
      "zip": "23513",
      "agencyName": "RCI",
      "coach": "Mildred Aranda"
    },
    {
      "id": 1072,
      "firstName": "Leila",
      "lastName": "Raher",
      "email": "test7@example.com",
      "state": "CA",
      "zip": "92129",
      "agencyName": "RCI",
      "coach": "Britania Grajeda Esparza"
    },
    {
      "id": 1074,
      "firstName": "Emilia",
      "lastName": "Nogic",
      "email": "test.tes1@example.com",
      "state": "TX",
      "zip": "75050",
      "agencyName": "RCI",
      "coach": "Deidre Blascyk"
    },
    {
      "id": 1075,
      "firstName": "Toni",
      "lastName": "Parker-Wilson",
      "email": "tes8@example.com",
      "state": "TX",
      "zip": "75040",
      "agencyName": "RCI",
      "coach": "Deidre Blascyk"
    }
  ];

const caregiversSlice = createSlice({
  name: 'caregivers',
  initialState,
  reducers: {
      caregiverAssignmentChanged(state, action) {
        // const updatedCaregivers = state.slice();
        for(let cg of state) {
            if (cg.id === action.payload.id) {
                cg.coach = action.payload.assigneTo;
                break;
            }
        }
      },
      caregiverUpdated(state, action){
        for(let i = 0; i < state.length; ++i) {
            const cg = state[i];
            if (cg.id === action.payload.id) {
                state[i] = action.payload;
                break;
            }
        }
      }
  }
})
export const { caregiverAssignmentChanged, caregiverUpdated } = caregiversSlice.actions;
export default caregiversSlice.reducer;