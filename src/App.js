import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CaregiversList from './features/caregiver-list/CaregiversList';
import CaregiverForm from './features/edit-caregiver/CaregiverForm';
import { useSelector } from 'react-redux';

// ####### App component #######
function App(){
  const caregivers = useSelector(state => state.caregivers);
  
  const getCaregiver = (caregiverId) => {
      return caregivers.filter((cg) => cg.id == caregiverId)[0];
  };


  return (
      <Router>
          <Switch>
              <Route exact={true} path="/">
                  <CaregiversList></CaregiversList>
              </Route>
              <Route 
                  path="/caregivers/:caregiverId" 
                  render={ ({match}) => {
                      return <CaregiverForm
                                  caregiver={getCaregiver(match.params.caregiverId)}></CaregiverForm>
                  }}>
                  
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
