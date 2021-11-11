import React from "react";
import Asset from "./Asset";
import './Expense.css'

const Expense = (props) => {
    
    let totalExpense = 0 
    for (let i = 0; i < props.asset.length; i++) {
        const amount = props.asset[i].amount;
        totalExpense += Number(amount)
        props.setTotalExpense(totalExpense)
      }
      

    return (
        <div className='expense card'>
             <h2 className='card-head'>Expenses</h2>
           <p className='card-title'>Total Expenses: <span> $</span>{totalExpense} </p>

           <div className='assets-container'>
           {props.asset.map((asset)=> (
               
               <Asset id={asset.key} handleDelete={props.handleDelete} type={asset.type} name={asset.name} amount={asset.amount} />
           ))}
           </div>
        </div>
    )
}


export default Expense