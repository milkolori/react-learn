import React from 'react';
import CaregiversListItem from './CaregiversListItem';

function CaregiversTable(props){

    const caregiverRows = props.caregivers.map((caregiver) => {
        return (<CaregiversListItem
                    key={caregiver.id} 
                    caregiver={caregiver} 
                    onChangeCaregiverAssignment={props.onChangeCaregiverAssignment}
                    coaches={props.coaches}></CaregiversListItem>);
    });
    const emptyRow = <tr key={0}><td colSpan="6" className="text-center">No caregivers in this list</td></tr>;
    const tableRows = caregiverRows.length > 0 ? caregiverRows : [emptyRow];
    
    return (
        <div className="caregivers-list">
            <h2>{props.listName}</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Coach</th>
                        <th>Agency</th>
                        <th className="action-col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
                
            </table>
        </div>
    );
}

export default CaregiversTable;
