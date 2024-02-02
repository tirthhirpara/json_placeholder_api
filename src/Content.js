import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import apple from './images/apple.jpg'
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

function Content(props) {
  let[p,setp]=useState();
  useEffect(()=>{
    setp( props.dataItem.thumbnail)
  },[])
  
  
  const Img=(ele)=>{
    setp(ele)
  }

  return (
    <>
      <div className='item'>
        <Row>
          <Col className='align-items-center'>
            <div className='product_img'>
              <img src={p} className='w-100 h-100'></img>
            </div>
            <div className='imgs'>
            <ul className='d-flex m-0 p-0 justify-content-start'>
                {
                 props.dataItem.images.map((ele,ind)=>{
                    return(
                        <li className='ImgBtn'>
                           <img src={ele} className='w-100 h-100 ' onClick={()=>Img(ele)}/>
                        </li>
                    )
                 })   
                }
            </ul>
            </div> 
          </Col>
          <Col>
            <div className='cnt mt-4'>
              <h3 className='mb-0'>{props.dataItem.description}</h3>
              <font>Visit the store</font>
              <div className='d-flex icons'>
                <font className="ps-1">{props.dataItem.rating}</font>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarHalfOutline /></i>
              </div>
              <hr className='ms-0 mb-1'></hr>
              <div className='d-flex align-items-center'>
                <span className='price'><sup className='sup'>$</sup>{props.dataItem.price}</span>
                <p className='ps-3 m-0 dis'>Discount: {props.dataItem.discountPercentage}%</p>
              </div>
              <p>Inclusive of all taxes</p>
              <hr className='ms-0 mb-1'></hr>
              <div className='l_cnt'>
                <span className='span pe-2'>Product:</span><span>{props.dataItem.title}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Category:</span><span>{props.dataItem.category}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Brand:</span><span>{props.dataItem.brand}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Stock:</span><span>{props.dataItem.stock}</span>
              </div>
            </div>
          </Col>
        </Row>
        
      </div>
    </>
  )
}

export default Content;
