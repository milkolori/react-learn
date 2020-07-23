import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CaregiversList from './CaregiversList';
import CaregiverForm from './CaregiverForm';

const CAREGIVERS_DATA = [
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

const COACHES_DATA = [
    'Mildred Aranda',
    'Deidre Blascyk',
    'Deidre Blascyk',
    'Britania Grajeda Esparza'
];

const STATES_DATA = [
    {
      "id": "AL",
      "name": "Alabama"
    },
    {
      "id": "AK",
      "name": "Alaska"
    },
    {
      "id": "AZ",
      "name": "Arizona"
    },
    {
      "id": "AR",
      "name": "Arkansas"
    },
    {
      "id": "CA",
      "name": "California"
    },
    {
      "id": "CO",
      "name": "Colorado"
    },
    {
      "id": "CT",
      "name": "Connecticut"
    },
    {
      "id": "DC",
      "name": "District of Columbia"
    },
    {
      "id": "DE",
      "name": "Delaware"
    },
    {
      "id": "FL",
      "name": "Florida"
    },
    {
      "id": "GA",
      "name": "Georgia"
    },
    {
      "id": "HI",
      "name": "Hawaii"
    },
    {
      "id": "ID",
      "name": "Idaho"
    },
    {
      "id": "IL",
      "name": "Illinois"
    },
    {
      "id": "IN",
      "name": "Indiana"
    },
    {
      "id": "IA",
      "name": "Iowa"
    },
    {
      "id": "KS",
      "name": "Kansas"
    },
    {
      "id": "KY",
      "name": "Kentucky"
    },
    {
      "id": "LA",
      "name": "Louisiana"
    },
    {
      "id": "ME",
      "name": "Maine"
    },
    {
      "id": "MD",
      "name": "Maryland"
    },
    {
      "id": "MA",
      "name": "Massachusetts"
    },
    {
      "id": "MI",
      "name": "Michigan"
    },
    {
      "id": "MN",
      "name": "Minnesota"
    },
    {
      "id": "MS",
      "name": "Mississippi"
    },
    {
      "id": "MO",
      "name": "Missouri"
    },
    {
      "id": "MT",
      "name": "Montana"
    },
    {
      "id": "NE",
      "name": "Nebraska"
    },
    {
      "id": "NV",
      "name": "Nevada"
    },
    {
      "id": "NH",
      "name": "New Hampshire"
    },
    {
      "id": "NJ",
      "name": "New Jersey"
    },
    {
      "id": "NM",
      "name": "New Mexico"
    },
    {
      "id": "NY",
      "name": "New York"
    },
    {
      "id": "NC",
      "name": "North Carolina"
    },
    {
      "id": "ND",
      "name": "North Dakota"
    },
    {
      "id": "OH",
      "name": "Ohio"
    },
    {
      "id": "OK",
      "name": "Oklahoma"
    },
    {
      "id": "OR",
      "name": "Oregon"
    },
    {
      "id": "PA",
      "name": "Pennsylvania"
    },
    {
      "id": "RI",
      "name": "Rhode Island"
    },
    {
      "id": "SC",
      "name": "South Carolina"
    },
    {
      "id": "SD",
      "name": "South Dakota"
    },
    {
      "id": "TN",
      "name": "Tennessee"
    },
    {
      "id": "TX",
      "name": "Texas"
    },
    {
      "id": "UT",
      "name": "Utah"
    },
    {
      "id": "VT",
      "name": "Vermont"
    },
    {
      "id": "VA",
      "name": "Virginia"
    },
    {
      "id": "WA",
      "name": "Washington"
    },
    {
      "id": "WV",
      "name": "West Virginia"
    },
    {
      "id": "WI",
      "name": "Wisconsin"
    },
    {
      "id": "WY",
      "name": "Wyoming"
    },
    {
      "id": "AS",
      "name": "American Samoa"
    },
    {
      "id": "GU",
      "name": "Guam"
    },
    {
      "id": "MP",
      "name": "Northern Mariana Islands"
    },
    {
      "id": "PR",
      "name": "Puerto Rico"
    },
    {
      "id": "UM",
      "name": "United States Minor Outlying Islands"
    },
    {
      "id": "VI",
      "name": "Virgin Islands"
    },
    {
      "id": "AA",
      "name": "Armed Forces Americas"
    },
    {
      "id": "AP",
      "name": "Armed Forces Pacific"
    },
    {
      "id": "AE",
      "name": "Armed Forces Others"
    }
];

// ####### App component #######
function App(){
    const [caregivers, setCaregivers] = useState(CAREGIVERS_DATA.slice());
    const [coaches] = useState(COACHES_DATA.slice());
    const [states] = useState(STATES_DATA.slice());

    const [unassignedCaregivers, setUnassignedCaregivers] = useState([]);
    const [assignedCaregivers, setAssignedCaregivers] = useState([]);
    useEffect(() =>{
        setUnassignedCaregivers(caregivers.slice().filter((cg) => !cg.coach));
        setAssignedCaregivers(caregivers.slice().filter((cg) => !!cg.coach));
    }, [caregivers]);

    const handleCaregiverAssignment = (caregiverId, assigneTo) => {
        const updatedCaregivers = caregivers.slice();
        for(let cg of updatedCaregivers) {
            if (cg.id === caregiverId) {
                cg.coach = assigneTo;
                break;
            }
        }

        setCaregivers(updatedCaregivers);
    };

    const handleCaregiverSave = (caregiver) => {
        const updatedCaregivers = caregivers.slice();
        if (caregiver.id) {
            for(let i = 0; i < updatedCaregivers.length; ++i) {
                const cg = updatedCaregivers[i];
                if(cg.id === caregiver.id) {
                    updatedCaregivers[i] = {...cg, ...caregiver};
                    break;
                }
            }
        } else {
            // TODO: add new caregiver - gen id
        }

        setCaregivers(updatedCaregivers);
    };

    const getCaregiver = (caregiverId) => {
        return caregivers.filter((cg) => cg.id == caregiverId)[0];
    };


    return (
        <Router>
            <Switch>
                <Route exact={true} path="/">
                    <CaregiversList
                        unassignedCaregivers={unassignedCaregivers} 
                        assignedCaregivers={assignedCaregivers}
                        onChangeCaregiverAssignment={handleCaregiverAssignment}
                        coaches={coaches}></CaregiversList>
                </Route>
                <Route 
                    path="/caregivers/:caregiverId" 
                    render={ ({match}) => {
                        return <CaregiverForm
                                    caregiver={getCaregiver(match.params.caregiverId)}
                                    onCaregiverSave={handleCaregiverSave}
                                    states={states}></CaregiverForm>
                    }}>
                    
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
