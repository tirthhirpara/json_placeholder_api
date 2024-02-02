
import { useState,useEffect } from 'react';
import Content from './Content';
import Items from './Items';
import Header from './Header';
import axios from 'axios';


function Home() {
    let [itemData, setItemData] = useState(null)
    let [data, setdata] = useState([]);
    let [tdata,settdata]=useState([]);
    let [cate, setcate] = useState([]);
    let[sdata,setsdata]=useState([]);
    
    useEffect(() => {
         axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                // console.log(response.data.products);
                setdata(response.data.products);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                setcate(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])

    return (
        <>
          <Header setsdata={setsdata} data={data}></Header> 
       {  
     
        itemData ? <Content dataItem={itemData} setData={setItemData} ></Content> :
        <Items setdata={setItemData} data={data} cate={cate} sdata={sdata}></Items>
       }
        </>
    )
}

export default Home;
