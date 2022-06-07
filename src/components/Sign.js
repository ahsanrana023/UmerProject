import React from 'react';
import { Avatar, Grid, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




const Sign = () => {
    const paperStyle = { padding: 20, height: '50vh', width: 420, margin: '100px auto' }
    const avatarStyle = {backgroundColor :'green'}
  return (
      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align ="center">
              <Avatar style={avatarStyle}> PC </Avatar>
              <h2> Sign-In </h2>
              </Grid>
              <TextField label="Email" placeholder="Enter Email" fullWidth required />
              <TextField label="Password" type="password" placeholder="Enter Password" fullWidth required />
            <Link to ='/'>  <Button variant="contained" fullWidth>Sign-IN</Button> </Link>
          </Paper>
     </Grid> 
  )
}

export default Sign