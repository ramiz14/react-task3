import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import PrList from '../Components/PrList';

var x=0
const Index = (props) => {
  const [items,setItems]=useState([])
  const changeHandler=async(e)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/category/${e.target.value}`)
    console.log(response.data);
    setItems(response.data)
  }
  const result=items.length===0?props.Prs:items
  return (
    <div className="container">
        <select onChange={changeHandler} name="" id="select"><option value="">Choose</option>
            {props.Catogs.map(catog=>{
            x++
            return(<option key={x} value={catog}>{catog}</option>)
        })}</select>
        <div className="row my-5">
        {
             result.map(Pr=>{
              return(<PrList key={Pr.id} pr={Pr}/>)
          })
        }   
        </div>
    </div>
  )
}

export default Index