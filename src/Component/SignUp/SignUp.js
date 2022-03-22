import { Typography, Container, Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css'
import { useHistory, Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';





const SignUp = () => {

    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const { userCreate } = useAuth();



    const onSubmit = data => {
        const { name, email, number, password } = data
     
        userCreate(name, email, password, number, history)

        reset();

    };

    return (
        <Box component="div" id="signMainContainer" sx={{ boxShadow: 3 }}>
            <Container id="regForm" sx={{ width: '50%', mx: 'auto', py: 4, borderRadius: 1 }}>
                <Container component="div">
                    <Typography variant="h4" sx={{ fontFamily: "Poppins", textAlign: 'center' }}>
                        User Sign Up Form
                    </Typography>
                </Container>
                <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                    <Container component="div" sx={{ p: 1 }}>
                        {/* Name */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >

                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="text"
                                    placeholder='Your Name'
                                    {...register("name", { required: true })}
                                />
                            </Box>
                        </Box>
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
                        {/* Number */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >

                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="text"
                                    placeholder='Number'
                                    {...register("number", { required: true })}
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
                        <Button variant="contained" id="loginBtn" type="submit"> SIGN UP</Button>
                    </Container>
                </form>
                <Container>
                    <Box component={Link} to="/signin" sx={{ color: 'text.secondary' }} >
                        <Typography sx={{ fontFamily: "Poppins" }}> Already Registerd? Please Sign In </Typography>
                    </Box>
                </Container>
            </Container>

        </Box>
    );
};

export default SignUp;