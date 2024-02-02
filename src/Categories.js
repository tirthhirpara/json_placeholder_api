import React from 'react';

function Categories(props) {
    let catedata=props.catedata;
    
    let cser=(e)=>{
        let crr=catedata.filter((ele)=>{
            return ele.category==e;
        })
        props.setcdata(crr);
        props.settmp("cate");
    }
    let cate = props.c;
    return (
        <div className='Main_content'>
            <div className='left_side'>
                <h4 className='mb-2'>Categories</h4>
                <ul>
                    {
                        cate.map((ele, ind,arr) => {
                            return (
                                <li key={ind} onClick={(e)=>cser(ele)}>{ele}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories;
