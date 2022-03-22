import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import './Footer.css';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const Footer = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box fluid id="footerStyle" sx={{ p: 5 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}> QUICK LINKS </Typography>
                        <Link className="footerLink" to="/home"> Home </Link>
                        <Link className="footerLink" to="/about"> About </Link>
                        <Link className="footerLink" to="/services"> Services </Link>
                        <Link className="footerLink" to="/appointment"> Appointment </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}> RANGPUR HEALTH CITY </Typography>
                        <Typography sx={{ lineHeight: 2, color: "" }} variant="body">
                            Health City Hospital is a 150 bedded, Multi-Super specialty, tertiary care Hospital, scientifically planned and strategically located at SaplaChattar, Rangpur.
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}> For Query, Write to us </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 2 }}>
                            <span> Rangpur  </span>
                            <span> query@healthcity.com </span>
                            <span> 01947598397</span>
                        </Box>
                        <Box >
                            <form id="footerSubscription" onSubmit={handleSubmit(onSubmit)} >
                                
                                <input placeholder='Enter Your Email' type="email" {...register("email")} />
                                
                                <Button variant="outlined" sx={{width:'100%',color:'white'}} type="submit" > Subscribe </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default Footer;