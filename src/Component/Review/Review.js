import React from 'react';
import { useForm } from "react-hook-form";
import { Box, Typography, Container, Button } from '@mui/material';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
      
        
        fetch('http://localhost:5000/review', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if(data._id) {
                    alert("Successfully Submited")
                }
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        reset()

    };


    return (
        <Box id="reviewForm" sx={{ p: { xs: 0, lg: 5 } }}>
            <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}> Rating Our Doctors</Typography>
            <Container sx={{ width: { xs: '100%', lg: '75%' } }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                        <input type="text"{...register("patient")} placeholder="Patient's Name" />
                        <select {...register("doctor")}>
                            <option value="Professor Dr. AKM Fazlul Hoque"> Professor Dr. AKM Fazlul Hoque </option>
                            <option value="Professor Dr. Mahbub H Khan"> Professor Dr. Mahbub H Khan </option>
                            <option value="Dr. Mohammad Jahangir Talukder">  Dr. Mohammad Jahangir Talukder </option>
                        </select>
                        <textarea {...register("review")} type="text" rows="10" placeholder="Write Your Review"></textarea>
                        <input {...register("rating")} type="number" placeholder="Rating (1to5 )" />
                        
                        
                        
                        <Button variant="contained" color="primary" type="submit"> Submit </Button>
                    </Container>
                </form>
            </Container>
        </Box>
    );
};

export default Review;


//qU9j1Qy7EDSnmszf
//admin