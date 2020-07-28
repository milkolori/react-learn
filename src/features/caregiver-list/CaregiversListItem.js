import React from 'react';
import { Link} from "react-router-dom";
import { caregiverAssignmentChanged } from './caregiversSlice'
import { useDispatch, useSelector } from 'react-redux';



function CaregiversListItem(props) {
    const dispatch = useDispatch();

    const coaches = useSelector(state => state.coaches);

    const handleUnassign = (event) => {
        event.preventDefault();
        dispatch(
            caregiverAssignmentChanged({
                id: props.caregiver.id,
                assigneTo: null
            })
        );
    };
    const handleAssign = (event) => {
        event.preventDefault();
        dispatch(
            caregiverAssignmentChanged({
                id: props.caregiver.id,
                assigneTo: event.target.value
            })
        );
    };

    const coachesOptions = coaches.map((coach, index) => {
        return <option key={index} value={coach}>{coach}</option>;
    });
    const action = (
        props.caregiver.coach ?
            <a href="" onClick={handleUnassign}>Unassign</a> :
            <label>Assign to:  
                <select onChange={handleAssign} style={{marginLeft: '1rem'}}>
                    <option key={-1} value=""></option>
                    {coachesOptions}
                </select>
            </label>
    );
    return (
        <tr>
            <td>{props.caregiver.firstName}</td>
            <td>{props.caregiver.lastName}</td>
            <td>{props.caregiver.email}</td>
            <td>{props.caregiver.state}</td>
            <td>{props.caregiver.zip}</td>
            <td>{props.caregiver.coach}</td>
            <td>{props.caregiver.agencyName}</td>
            <td className="action-col">
                {action}
                <Link  to={`caregivers/${props.caregiver.id}`} style={{marginLeft: '1rem'}} >Details</Link>
            </td>
        </tr>
    );
}


export default CaregiversListItem;
