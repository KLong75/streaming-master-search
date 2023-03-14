import React from 'react';
// import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/material';
//import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   featured: {
//     width: '100%',
//     height: 'auto',
//   }
// }));

const HomePage = () => {
  //const classes = useStyles();

  return (
    <>
    <Header></Header>
    <Container sx={{
      minHeight: '75vh',
    }}>
      Featured
    </Container>

    <Container>
      categories
    </Container>
    <Footer></Footer>
    </>
  )
  
};

export default HomePage;