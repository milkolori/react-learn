import React from 'react';
import CaregiversTable from './CaregiversTable';
import { useSelector } from 'react-redux';

function CaregiversList(props){
    const unassignedCaregivers = useSelector(state => state.caregivers.filter(cg => !cg.coach));
    const assignedCaregivers = useSelector(state => state.caregivers.filter(cg => cg.coach));

    return (
        <div className="content">
            <h1>Caregivers</h1>
            <CaregiversTable 
                listName="Unssigned Caregivers" 
                caregivers={unassignedCaregivers}></CaregiversTable>
            
            <CaregiversTable 
                listName="Assigned Caregivers" 
                caregivers={assignedCaregivers}></CaregiversTable>
        </div>
    );
}

export default CaregiversList;
