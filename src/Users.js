
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';

function User() {
    let [data, setdata] = useState([]);
    let [data1, setdata1] = useState([]);
    let [data2, setdata2] = useState([]);
    let [data3, setdata3] = useState([]);
    let [data4, setdata4] = useState([]);
    let arr = []


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {

                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            <Header></Header>
                <table className='bor'>
                    <tr>
                        <th className='bor'>id</th>
                        <th className='bor'>name</th>
                        <th className='bor'>username</th>
                        <th className='bor'>email</th>
                        <th className='bor' colSpan={4}>address</th>
                        <th className='bor' colSpan={2}>geo</th>
                        <th className='bor'>phone</th>
                        <th className='bor'>website</th>
                        <th className='bor' colSpan={3}>company</th>
                    </tr>
                    <tr>
                        <th className='bor'></th>
                        <th className='bor'></th>
                        <th className='bor'></th>
                        <th className='bor'></th>
                        <th className='bor'>street</th>
                        <th className='bor'>suite</th>
                        <th className='bor'>city</th>
                        <th className='bor'>zipcode</th>
                        <th className='bor'>lat</th>
                        <th className='bor'>lng</th>
                        <th className='bor'></th>
                        <th className='bor'></th>
                        <th className='bor'>name</th>
                        <th className='bor'>catchPhrase</th>
                        <th className='bor'>bs</th>

                    </tr>
                    {
                        data.map((ele, ind) => {
                            return (
                                <tr key={ind}>
                                    <td className='bor'>{ele.id}</td>
                                    <td className='bor'>{ele.name}</td>
                                    <td className='bor'>{ele.username}</td>
                                    <td className='bor'>{ele.email}</td>
                                    <td className='bor'>{ele.address.street}</td>
                                    <td className='bor'>{ele.address.suite}</td>
                                    <td className='bor'>{ele.address.city}</td>
                                    <td className='bor'>{ele.address.zipcode}</td>
                                    <td className='bor'>{ele.address.geo.lat}</td>
                                    <td className='bor'>{ele.address.geo.lng}</td>
                                    <td className='bor'>{ele.phone}</td>
                                    <td className='bor'>{ele.website}</td>
                                    <td className='bor'>{ele.company.name}</td>
                                    <td className='bor'>{ele.company.catchPhrase}</td>
                                    <td className='bor'>{ele.company.bs}</td>

                                </tr>
                            )
                        })
                    }
                </table>



           
        </>
    )
}
export default User;
