import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";


import Categories from './Categories';

function Items(props) {
    let cate=props.cate;
    let catedata=props.data;
    let data;
    let [cdata,setcdata]=useState([]);
    let [tmp,settmp]=useState('');

    if(props.sdata=="" && cdata==""){
        data=props.data;
    }
    else{
        if(tmp ==="cate")
        {
            data=cdata;
        }
        else{
            data=props.sdata;
        }
    }
  
    function move(ele){
        props.setdata(ele);
    }
    return (
        <div className='Main_content'>
            <Row>   
                <Col lg={3} className='p-0'>
                <Categories c={cate} setcdata={setcdata} catedata={catedata} settmp={settmp}></Categories>
                </Col>
                <Col className='p-0'>
                    {
                        data.map((ele, ind) => {
                            return (
                                    <div className='box d-flex align-items-center' onClick={()=>{move(ele)}}>
                                        <div className='img'>
                                            <img src={ele.thumbnail} className='w-100 h-100'></img>
                                        </div>
                                        <div className='content p-3'>
                                            <h4>{ele.title}</h4>
                                            <div className='d-flex'>
                                                <div className='d-flex icons'>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarHalfOutline /></i>
                                                </div>
                                                <font className="ps-1">{ele.rating}</font>
                                            </div>
                                            <span className='price'><sup className='sup'>$</sup>{ele.price}</span>
                                            <p className='m-0 dis'>Discount: {ele.discountPercentage}%</p>
                                            <p style={{ color: "#F3A847", fontSize: "16px" }}>FREE delivery</p>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Items;
