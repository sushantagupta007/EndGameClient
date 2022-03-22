import React, { useState, useEffect, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography,Box } from '@mui/material';

import './AdminReview.css'

const AdminReview = () => {
    const [review, setReview] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReview(data)

                console.log("changed1")
            })
    }, [])



    
    const handleSendData = (e,row) => {
        const decision = {
            decision: e.target.innerText
        }
        console.log(decision)
        fetch(`http://localhost:5000/review/${row}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(decision),
        })
            .then(response => response.json())
            .then(data => {
                if(data.acknowledged){
                    alert("Successfully Modified")
                }
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient's Name</TableCell>
                            <TableCell align="right">Doctor's Name</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Review</TableCell>
                            <TableCell align="right">Admin Decision</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {review.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                
                                <TableCell component="th" scope="row">
                                    {row.pname}
                                </TableCell>
                                <TableCell align="right">{row.dname}</TableCell>
                                <TableCell align="right">{row.rating}</TableCell>
                                <TableCell align="right">{row.review}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={(e)=>handleSendData(e, row._id)}>
                                        Approve
                                    </Button>
                                    <Button onClick={(e)=>handleSendData(e,row._id)}>
                                        Reject
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            
        </Box>

    );
};

export default AdminReview;