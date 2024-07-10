// src/AllEvents.js
import React,{useEffect,useState} from 'react';
//import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {listEmployees} from './API';

export default function ServiceDetails() {
    const [data, setData] = useState([]);
    useEffect(() => {
        listEmployees().then((response) =>{
            setData(response.data);
        }).catch (error => {
            console.error('Error fetching data:', error);         
        })
    }, []);

    return (
        <div className='background'>
            <h1 className='custom-title'>All service</h1>
        <div className='container custom-data-table-container'>
<table className="table table-striped table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Job Role</th>
                <th>Phone Number</th>             
            </tr>
        </thead>
        <tbody>
            {
                data.map(event=>
                <tr key={event.id} >
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.jobRole}</td>
                <td>{event.phoneNumber}</td>
                </tr>
                )
            }
        </tbody>
   </table>     
        </div>
        </div>
    );
}
