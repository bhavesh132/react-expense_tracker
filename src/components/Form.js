import React, { useState } from "react";
import { nanoid } from 'nanoid'
import './Form.css'


const Form = (props) => {
    const [assetType, setassetType] = useState('')
    const [assetName, setassetName] = useState('')
    const [assetAmount, setassetAmount] = useState('')

    const assetTypeHandler = (e) => {
        setassetType(e.target.value)
    }

    const nameHandler = (e) => {
        setassetName(e.target.value)
    }

    const amountHandler = (e) => {
        setassetAmount(e.target.value)
    }

    const addAsset = (e) => {
        e.preventDefault();
        if (assetType === '' || assetName === '' || assetAmount === ''){
            alert('invalid input')
        }else{
        props.setAsset([...props.asset, {key: nanoid() ,type: assetType, name: assetName, amount: assetAmount}])
        setassetAmount('')
        setassetName('')
        setassetType('')
        
        }
    }


    return(
        <div className='form card'>
            <div className='assets'>
                <p>Total Assets: <span> $</span>{props.totalAsset}</p>
            </div>
            <div className='form-head'>
                <h2><center>Add an Asset</center></h2>
                <form>
                    <div className='input-group'>
                        <select onChange={assetTypeHandler} value={assetType} name='assetType' className='form-input' required id='assetType' >
                           <option name=''></option>
                            <option name='income'>Income</option>
                            <option name='expense'>Expense</option>
                        </select>
                        <label htmlFor='assetType'>Income or Expense</label>
                    </div>
                    <div className='input-group'>
                        <input value={assetName} onChange={nameHandler} type='text' required id='assetName' className='form-input' />
                        <label htmlFor='assetName'>Enter Text</label>
                    </div>
                    <div className='input-group'>
                        <span className='input-icon'>$</span>
                        <input value={assetAmount} onChange={amountHandler} type='text' required id='assetAmount' className='form-input' />
                        <label htmlFor='assetAmount'>Enter Amount</label>
                    </div>
                    <div className='action'>
                        <button className='btn-add' id='add' onClick={addAsset}>Add Asset</button>
                       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form