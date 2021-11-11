import React from "react";
import './Asset.css'
import { MdDelete } from 'react-icons/md'

const Asset = (props) => {
    return (
        <div className='asset-box'>
            {props.name}
            <div className='sub-head'>
                <p>{props.amount}<span>$</span></p>
                <div className='action-dlt'><MdDelete className='delete-btn' onClick={()=> props.handleDelete(props.id)}/></div>
            </div>
            
        </div>
    )
}

export default Asset;