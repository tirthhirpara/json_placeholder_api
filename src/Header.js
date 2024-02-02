import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from './images/logo.png'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react'


function Header(props) {
    let [sdata,setsdata]=useState([]);
    let [s,sets]=useState('');
    const ser=()=>{
      if(s!=''){
        setsdata(props.data);
        let newarr=sdata.filter((ele)=>{
            return ele.title.toLowerCase().includes(s.toLowerCase())
        })
        props.setsdata(newarr);
        console.log(newarr)
      }

    }

    const all=()=>{
        props.setsdata(props.tdata);
    }
    return (
        <nav>
            <Row className='align-items-center'>
                <Col lg={3} >
                    <div className='img'>
                        <img src={logo}></img>
                    </div>
                </Col>
                <Col className='text-center' lg={6}>
                    <div className='d-flex justify-content-center align-items-center ser'>
                        <Dropdown className='drop_main'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                All
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='drop_down'>
                                <Dropdown.Item href="#/action-1" className='items' onClick={all}>All Categories</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className='items'>Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className='items'>Something else</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className='items'>Something else</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className='items'>Something else</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className='items'>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input type='text' placeholder='Search Amazon.in' onChange={(e)=>sets(e.target.value)}></input>
                        <button onClick={ser}><i><BsSearch /></i></button>
                    </div>
                </Col>
                <Col className='text-end' lg={3}>
                    <div className='cart'>
                        <i><FaShoppingCart /></i>
                    </div>
                </Col>
            </Row>
        </nav>
    )
}
export default Header;
