import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
function Comments() {

    let [com, setcom] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setcom(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }, [])
    return (
        <>
            <table>
                <tr className='text-center'>
                    <th className='bor'>POST ID</th>
                    <th className='bor'>ID</th>
                    <th className='bor'>NAME</th>
                    <th className='bor'>EMAIL</th>
                    <th className='bor'>BODY</th>
                </tr>
                {
                    com.map((ele, ind) => {
                        return (
                            <tr>
                                <td className='bor text-center'>{ele.postId}</td>
                                <td className='bor text-center'>{ele.id}</td>
                                <td className='bor'>{ele.name}</td>
                                <td className='bor'>{ele.email}</td>
                                <td className='bor'>{ele.body}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Comments;