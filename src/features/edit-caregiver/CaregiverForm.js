import React, { useState, useEffect } from 'react';
import {
    Link,
    useHistory
  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { caregiverUpdated } from '../caregiver-list/caregiversSlice';

// ####### Caregiver Details component #######
function CaregiverForm(props){
    const [caregiver, setCaregiver] = useState({
        "id": null,
        "firstName": "",
        "lastName": "",
        "email": "",
        "state": "",
        "zip": "",
        "agencyName": ""
      });
    const history = useHistory();


    useEffect(() => {
        if(props.caregiver) {
            setCaregiver(props.caregiver);
        }
    }, props.caregiver);

    const states = useSelector(state => state.states);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            caregiverUpdated(caregiver)
        );
        history.push('/');
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        const updatedCaregiver = {...caregiver, [name]: value}
        setCaregiver(updatedCaregiver);
      }

    const stateOptions = states.map((state) => {
        return <option key={state.id} value={state.id}>{state.name}</option>
    });

    return (
        <div className="content">
            <Link to={'/'}>{'< Back to list'}</Link>
            <h2>{caregiver.id ? `${caregiver.firstName} ${caregiver.lastName}` : 'Add caregiver'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>First name:</span>
                    <input
                        name="firstName"
                        type="text"
                        value={caregiver.firstName}
                        onChange={handleInputChange} />
                </label>
                <label>
                    <span>Last name:</span>
                    <input
                        name="lastName"
                        type="text"
                        value={caregiver.lastName}
                        onChange={handleInputChange} />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        name="email"
                        type="text"
                        value={caregiver.email}
                        onChange={handleInputChange} />
                </label>
                <label>
                    <span>State:</span>
                    <select value={caregiver.state} onChange={handleInputChange}>
                        {stateOptions}
                    </select>
                </label>
                <label>
                    <span>Zip code:</span>
                    <input
                        name="zip"
                        type="number"
                        value={caregiver.zip}
                        onChange={handleInputChange} />
                </label>
                <label>
                    <span>Agency:</span>
                    <select value={caregiver.agencyName} onChange={handleInputChange}>
                        <option value="RCI">RCI</option>
                    </select>
                </label>

                <div className="action">
                    <input type="submit" value="Save caregiver" />
                </div>
            </form>
        </div>

    );
}

export default CaregiverForm;
