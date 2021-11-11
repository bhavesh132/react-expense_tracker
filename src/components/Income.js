import React from "react";
import Asset from "./Asset";
import './Income.css'


const Income = (props) => {   
    let totalIncome = 0
    for (let i = 0; i < props.asset.length; i++) {
        const amount = props.asset[i].amount;
        totalIncome += Number(amount)
        props.setTotalIncome(totalIncome)
      }

    return (
       <div className='card'>
           <h2 className='card-head'>Income</h2>
           <p className='card-title'>Total Income: <span> $</span>{totalIncome} </p>

           <div className='assets-container'>
           {props.asset.map((asset)=> (
               <Asset handleDelete={props.handleDelete} id={asset.key} type={asset.type} name={asset.name} amount={asset.amount} />
           ))}
           </div>
       </div>
    )
}

export default Income