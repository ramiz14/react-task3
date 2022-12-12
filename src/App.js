import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Pages/About';
import ExpProducts from './Pages/ExpProducts';
import Index from './Pages/Index';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const [catogories,setCatog]=useState([])
  const [prs,setPrs]=useState([])
  useEffect(()=>{
    const getPrs=async()=>{
      const response=await axios.get('https://fakestoreapi.com/products')
      setPrs(response.data)
    }
    getPrs()
    const getCatog=async()=>{
      const response=await axios.get('https://fakestoreapi.com/products/categories')
      setCatog(response.data)
    }
    getCatog()
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Index Prs={prs} Catogs={catogories} />}></Route>
          <Route path='expPrs' element={<ExpProducts Prs={prs}/>}></Route>
          <Route path='about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
