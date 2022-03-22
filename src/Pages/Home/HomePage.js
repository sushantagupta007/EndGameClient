import React from 'react';
import Carosal from '../../Component/Carosal/Carosal';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/NavBar/NavBar';

const HomePage = () => {
    return (
        <>
          <NavBar></NavBar> 
          <Carosal></Carosal>
          <Footer></Footer> 
        </>
    );
};

export default HomePage;