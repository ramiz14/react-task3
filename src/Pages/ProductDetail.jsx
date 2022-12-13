import React from 'react'
import axios from'axios'
import {useNavigate,useParams} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetail = () => {
    const {id} =useParams();
    const navigate=useNavigate();
    const [item,setItem]=useState([]);
    useEffect(()=>{
        const getItemById=async()=>{
            const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
            setItem(response.data)
            console.log(response.data);
        }
        getItemById()
    },[])
  return (
    <div className="container pr-detail-all">
        <div className="row pr-detail">
            <div className="col-lg-6 detail-img"><img src={item.image} alt="" /></div>
            <div className="col-lg-6">
                <div className="detail">
                    <h2 className="detail-title">{item.title}</h2>
                    <p className='detail-description'>{item.description}</p>
                    <span className="detail-text bg-success py-2 px-4 rounded">{item.price}$</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail