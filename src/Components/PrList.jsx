import React from 'react'

const PrList = (props) => {
  return (
    <div key={props.pr.id} className="card col-lg-3 my-2" >
            <img src={props.pr.image} className="card-img-top" alt="img" />
            <div className="card-body">
            <h5 className="card-title">{props.pr.title.length>20?`${props.pr.title.slice(0,20)}...`:props.pr.title}</h5>
            <p className="card-text">{props.pr.price}$</p>
        </div>
    </div>
  )
}

export default PrList