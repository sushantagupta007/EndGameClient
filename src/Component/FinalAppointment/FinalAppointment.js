import React,{useState,useEffect} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const FinalAppointment = () => {
    const [appproveAppointment,setApprovement] = useState([])

    useEffect(()=>{
        let appointmentApprove = []; 
        fetch('http://localhost:5000/appointment')
        .then(res=>res.json())
        .then(data=>{
            appointmentApprove = data.filter(item=>item.Decision==='APPROVE')
           
            setApprovement(appointmentApprove)
            })
    },[])
   
    
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell align="right">Doctor</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Symptomps</TableCell>
              <TableCell align="right">Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appproveAppointment.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Doctor}</TableCell>
                <TableCell align="right">{row.Department}</TableCell>
                <TableCell align="right">{row.Symptoms}</TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default FinalAppointment