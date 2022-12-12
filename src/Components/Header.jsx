import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row d-flex header-all">
                <div className="col-lg-2 icn">
                    <Link to={'/'}>Store.az</Link>
                    </div>
                <div className="col-lg-4 nav">
                    <Link to='/'>Home</Link>
                    <Link to='about'>About</Link>
                    <Link to='expPrs'>Expensive Products</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header