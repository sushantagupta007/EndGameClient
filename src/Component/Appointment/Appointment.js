import React from 'react';
import './Appointment.css'
import { Box, Typography, Grid, Container, Button } from '@mui/material';

import { useForm } from "react-hook-form";

const Appointment = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/appointment', {
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
            reset();
        console.log(data)
    }
    return (
        <Box id="appointmentOuterBox">

            <form onSubmit={handleSubmit(onSubmit)}>
                <Container id="appointmentInnerBox" sx={{ p: 2 }}>
                    <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}> Book Appointment</Typography>
                    <Grid container spacing={2} sx={{ my: 1 }}>
                        {/* PatientName */}
                        <Grid item xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label >Patient Name </label>
                            <input  type="text" {...register("firstName")} />
                        </Grid>
                        {/* DoctorsName */}
                        <Grid item  xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label >Doctor's Name </label>
                            <select {...register("Doctor")}>
                                <option  value="Professor Dr. AKM Fazlul Hoque"> Professor Dr. AKM Fazlul Hoque </option>
                                <option  value="Professor Dr. Mahbub H Khan"> Professor Dr. Mahbub H Khan </option>
                                <option  value="Dr. Mohammad Jahangir Talukder">  Dr. Mohammad Jahangir Talukder </option>
                            </select>
                        </Grid>
                        {/* Department */}
                        <Grid item  xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label >Department's Name </label>
                            <select {...register("Department")}>
                                <option  value="Cardiology"> Cardiology </option>
                                <option  value="Surgery"> Surgery </option>
                                <option value="Medicine">  Medicine </option>
                            </select>
                        </Grid>

                        {/* Phone */}
                        <Grid item xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label >Phone </label>
                            <input  type="text" {...register("phone")} />
                        </Grid>
                        <Grid item  xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label >Symptoms </label>
                            <input type="text" {...register("symptoms")} /> 
                        </Grid>
                        <Grid item  xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label> Choose Date </label>
                            <input type="date" {...register("date")} />
                        </Grid>
                    </Grid>
                    <Button variant="outlined" type="submit"> Submit </Button>
                </Container>
            </form>
        </Box>
    );
};

export default Appointment;