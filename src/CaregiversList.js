import React from 'react';
import CaregiversTable from './CaregiversTable';

function CaregiversList(props){
    return (
        <div className="content">
            <h1>Caregivers</h1>
            <CaregiversTable 
                listName="Unssigned Caregivers" 
                caregivers={props.unassignedCaregivers}
                onChangeCaregiverAssignment={props.onChangeCaregiverAssignment}
                coaches={props.coaches}></CaregiversTable>
            
            <CaregiversTable 
                listName="Assigned Caregivers" 
                caregivers={props.assignedCaregivers}
                onChangeCaregiverAssignment={props.onChangeCaregiverAssignment}
                coaches={props.coaches}></CaregiversTable>
        </div>
    );
}

export default CaregiversList;
