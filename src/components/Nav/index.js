import { List, ListItem } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';

const Nav= () => {
  
  return (
    <nav>
      <List sx={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <ListItem><Link to='/'>Landing Page / Title</Link></ListItem>
        <ListItem><Link to='/home_page'>Home</Link></ListItem>
        <ListItem><Link to='/login'>Login</Link></ListItem>
        <ListItem><Link to='/signup'>Sign Up</Link></ListItem>
        <ListItem><Link to='/search'>Search</Link></ListItem>
        <ListItem><a href='/'>Sign Out</a></ListItem>
      </List>
    </nav> 
  );
};

export default Nav;