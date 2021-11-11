import React, { useState, useEffect } from "react";
import Income from './components/Income'
import Form from "./components/Form";
import './app.css'
import Expense from "./components/Expense";


const App = () => {
  const LOCAL_STORAGE_KEY = 'assets'
  const [asset, setAsset] = useState([])
  const [totalAsset, setTotalAsset] = useState(0)
  const [totalIncome, setTotalIncome]= useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(asset))
  }, [asset])
  
  useEffect(() => {
      const retrieveAsset =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      console.log(retrieveAsset)
      setAsset(retrieveAsset)
  }, [])

  useEffect(() => {
      setTotalAsset(totalIncome-totalExpense)
  }, [totalExpense, totalIncome])
  
  const deleteHandler = (id) => {
    const newAssets = asset.filter((asset)=> asset.key !== id)
    setAsset(newAssets)
  }

  return (
    <div>
      <h1><center>Expense Tracker</center></h1>
      <div className='cards'>
      <Income setTotalIncome={setTotalIncome} handleDelete={deleteHandler} asset={asset.filter((asset)=> asset.type === 'Income')} setAsset={setAsset}/>
      <Form totalAsset={totalAsset} asset={asset} setAsset={setAsset}/>
      <Expense setTotalExpense={setTotalExpense} handleDelete={deleteHandler} asset={asset.filter((asset)=> asset.type === 'Expense')} setAsset={setAsset}/>
      </div>
    </div>
  )
}
export default App;
