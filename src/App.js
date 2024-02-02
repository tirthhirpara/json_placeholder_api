
import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Content from './Content';
import { useState } from 'react';
import Header from './Header';
import Home from './Home';

function App() {
  let [data,setdata]=useState([]);
  // let [sdata,setsdata]=useState([]);
  return (
   <>
    <Home setdata={setdata}  data={data}></Home>
    </>

  );
}

export default App;
