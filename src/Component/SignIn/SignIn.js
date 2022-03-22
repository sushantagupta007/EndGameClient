import { Typography, Container, Box, Button, Grid } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './SignIn.css'
import { useHistory, Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



const SignIn = () => {

    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const { signInUser, googleSign } = useAuth();

    

    const onSubmit = data => {
        const {email,password } = data
      
        signInUser(email, password,history)

        reset();

    };

    return (
        <Box component="div" id="signMainContainer" sx={{ boxShadow: 3 }}>
            <Container id="regForm" sx={{ width: '50%', mx: 'auto', py: 4, borderRadius: 1 }}>
                <Container component="div">
                    <Typography variant="h4" sx={{ fontFamily: "Poppins", textAlign: 'center' }}>
                        User Sign In
                    </Typography>
                </Container>
                <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                    <Container component="div" sx={{ p: 1 }}>
                        {/* Email */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >

                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="email"
                                    placeholder='Your Email'
                                    {...register("email", { required: true })}
                                />
                            </Box>
                        </Box>
                        {/* Password */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >

                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="password"
                                    placeholder='Password'
                                    {...register("password", { required: true })}
                                />
                            </Box>
                        </Box>
                    </Container>

                    <Container>
                        <Button variant="contained" id="loginBtn" type="submit"> Sign In</Button>
                    </Container>
                </form>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 0,
                    }}
                >
                    <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Poppins' }}> or Login Using</Typography>
                <Container sx={{ py: 1, marginLeft: '3.8px' }}>
                    <Box component="div" id="fontAwesomeDiv" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 2, }}>
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                <Typography sx={{ p: 1, bgcolor: '#1F2B6C', borderRadius: '50%', color: 'white' }} component="a" onClick={() => googleSign(history)}>
                                    <FontAwesomeIcon icon={faGoogle}>
                                    </FontAwesomeIcon>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                            <Box component={Link} to="/signup" sx={{ color: 'text.secondary' }} >
                                <Typography sx={{ fontFamily: "Poppins" }}> New User? Please Sign Up </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                </Container>
            </Container>
          
        </Box>
    );
};

export default SignIn;