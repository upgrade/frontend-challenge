import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfo } from "../store/info-provider";

import Box from '@mui/material/Box';
import List from "@mui/material/List";
import Stack from '@mui/material/Stack';
import Button from "../components/Button"
import Layout from "../components/Layout";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from '@mui/material/CircularProgress';


import { convertPasswordToStars } from "../util/display.util";

export default function Confirmation() {  
  const navigate = useNavigate()  
  const { state } = useInfo()
  const { name, email, password, color, terms } = state

  const [submitting, setSubmitting] = useState(false)

  const submitHandler = () => {
    setSubmitting(true)
    fetch('http://localhost:3001/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, color, terms })
    })
    .then((response) => {
      if(response.status === 200) {
        navigate('/success')
      } else {
        navigate('/error')
      }
    })
  }

  return (
    <Layout id="confirmation">
      {submitting === true && (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      )}  
      {submitting === false && (
        <>
          <h1>Confirmation</h1>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="First Name" secondary={name}/>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Email" secondary={email}/>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Password" secondary={convertPasswordToStars(password)}/>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Favorite Color" secondary={color}/>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Terms and Conditions Agreed" secondary={terms ? "Agreed" : "Not Agreed"}/>
            </ListItem>
          </List>

          <Box sx={{marginTop:4}}>
            <Stack direction="row" spacing={2}>
              <Button 
                onClickProp={() => {
                  navigate(-1)
                }}
                copy="Back"
              />
              <Button 
                onClickProp={(e) => {
                  e.preventDefault()
                  submitHandler()
                }}
                copy="Submit"
              />
            </Stack>
          </Box>
        </>
      )}
    </Layout>
  );
}