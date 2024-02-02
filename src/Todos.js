import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

function Todos() {

    let [todo, settodo] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                settodo(response.data);
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
                    <th className='bor'>USER ID</th>
                    <th className='bor'>ID</th>
                    <th className='bor'>TITLE</th>
                    <th className='bor'>COMPLETED</th>
                </tr>
                {
                    todo.map((ele, ind) => {
                        return (
                            <tr>
                                <td className='bor text-center'>{ele.userId}</td>
                                <td className='bor text-center'>{ele.id}</td>
                                <td className='bor'>{ele.title}</td>
                                <td className='bor'>{ele.completed ? "true" : "false" }</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Todos;
