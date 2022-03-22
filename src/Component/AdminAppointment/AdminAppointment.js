import React, { useEffect, useState, useRef } from 'react';


import './AdminAppointment.css'
import { Grid, Button } from '@mui/material';

const AdminAppointment = () => {

    const [appointment, setAppointent] = useState([])
    const [afterApproval, setAfterApproval] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/appointment')
            .then(res => res.json())
            .then(data => setAppointent(data))
    }, [])

    useEffect(()=>{
        let afterApprovalData = []; 
        fetch('http://localhost:5000/appointment')
        .then(res=>res.json())
        .then(data=>{
            afterApprovalData = data.filter(item=>item.Decision!=='APPROVE')
            console.log(afterApprovalData)
            setAppointent(afterApprovalData)
            })
    },[afterApproval])

    const handleApprove=(e,item)=>{
        const id = item._id
        const Decision = {Decision:e.target.innerText}
        console.log(Decision)
        fetch(`http://localhost:5000/appointment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Decision),
        })
            .then(response => response.json())
            .then(data => {
                if(data.acknowledged){
                    console.log(data)
                    setAfterApproval(true)
                    alert("Successfully Approved")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const handleDelete = (item) => {
        const id=  item._id
        console.log(id)
        fetch(`http://localhost:5000/appointment/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
            }).then(res=>res.json)
            .then(data=>console.log(data))
    }
    return (

        <ul id="listUl" >

            {
                appointment.map((item, index) =>
                    <li className='listStyle' key={item._id}>
                        <span className='listElement'> {item.Name} </span>
                        <span className='listElement'> {item.Doctor} </span>
                        <span className='listElement'> {item.Department} </span>
                        <span className='listElement'> {item.Date} </span>
                        <Button onClick={(e)=>handleApprove(e,item)} sx={{ mx: 1, py: 1 }} size="small" color="success" variant={`${afterApproval? "contained":"outlined"}`}>APPROVE</Button>
                        <Button onClick={() => handleDelete(item)} sx={{ py: 1 }} size="small" variant="contained" color="error">DELETE</Button>
                    </li>
                )
            }
        </ul>


    );
};

export default AdminAppointment;