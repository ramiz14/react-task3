import React from 'react'
import { Link } from 'react-router-dom'

const ExpProducts = (props) => {
    const filteredPrs=props.Prs&&props.Prs.filter(pr=>pr.price>100)
  return (
    <div className="container">
    <div className="row ">
    {
        filteredPrs&&filteredPrs.map(item=>{
            return( <div key={item.id} className="card col-lg-3 my-2" >
            <Link to={`/details/${props.pr.id}`}><img src={props.pr.image} className="card-img-top" alt="img" /></Link>
            <div className="card-body">
            <h5 className="card-title">{item.title.length>20?`${item.title.slice(0,20)}...`:item.title}</h5>
            <p className="card-text">{item.price}$</p>
        </div>
    </div>)
        })
    }   
    </div>
</div>
  )
}

export default ExpProducts