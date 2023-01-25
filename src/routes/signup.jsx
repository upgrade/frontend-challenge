
import { useState, useEffect } from "react";
import { useInfo } from "../store/info-provider";
import { useNavigate, useNavigation } from "react-router-dom";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "../components/Button"
import Layout from "../components/Layout";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';

import { isSignupValid } from "../util/validator";


export default function Signup() {
  const { dispatch, state } = useInfo()

  const {state: loadingState} = useNavigation() // 'loading' while colors are fetched for next page
  const navigate = useNavigate()

  const [email, setEmail] = useState(state.email)
  const [firstName, setFirstName] = useState(state.name)
  const [password, setPassword] = useState(state.password)
  const [validationErrs, setValidationErrs] = useState({})

  useEffect(() => {
    if(email !== null || firstName !== null || password !== null)
    runValidation()
  }, [email, firstName, password])

  const runValidation = () => {
    if( email === null && password === null && firstName === null) {
      return false
    }

    const validation = isSignupValid(firstName, email, password)
    if (validation.valid) {
      setValidationErrs([])
      return true      
    }else{
      setValidationErrs(validation.errors)
      return false
    } 
  }

  const submitHandler = () => {
    if(runValidation()) {
      dispatch({type: 'personal', firstName, email, password})
      navigate('/more-info')
    }
  }

  const isFirsNameError = validationErrs["first"] && validationErrs["first"].length > 0
  const firstNameError = isFirsNameError ? validationErrs["first"].reduce((acc, curr) => acc += "\n" + curr) : ""

  const isEmailError = validationErrs["email"] && validationErrs["email"].length > 0
  const emailError = isEmailError ? validationErrs["email"].reduce((acc, curr) => acc += "\n" + curr) : ""

  const isPasswordError = validationErrs["password"] && validationErrs["password"].length > 0
  const passwordError = isPasswordError ? validationErrs["password"].reduce((acc, curr) => acc += "\n" + curr) : ""

  return (
    <Layout>
      {loadingState === 'loading' && (
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
          </Stack>
      )}  
      {loadingState === 'idle' && (  
        <>
          <h1>Sign Up</h1>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1},
              minWidth: 120
            }}
          >
            <FormControl fullWidth>
              <TextField
                error={isFirsNameError}
                helperText={firstNameError}
                required
                label="First name"
                name="first"
                onChange={(e) => { 
                  setFirstName(e.target.value) 
                  runValidation()
                }}
                onBlur={(e) => { 
                  setFirstName(e.target.value) 
                  runValidation()
                }}
                defaultValue={firstName}
              />

            </FormControl>

            <FormControl fullWidth>
              <TextField
                error={isEmailError}
                helperText={emailError}
                required
                label="Email"
                name="email"
                onChange={(e) => { 
                  setEmail(e.target.value) 
                  runValidation()
                }}
                onBlur={(e) => { 
                  setEmail(e.target.value) 
                  runValidation()
                }}
                defaultValue={email}
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                required
                error={isPasswordError}
                helperText={passwordError}
                autoComplete="current-password"
                type="password"
                name="password"
                label="Password"
                onChange={(e) => { 
                  setPassword(e.target.value) 
                  runValidation()
                }}
                onBlur={(e) => { 
                  setPassword(e.target.value) 
                  runValidation()
                }}
                defaultValue={password}
              />       
            </FormControl>
          </Box>

          <Box sx={{ marginTop: 10 }}>
            <FormControl>
              <Button 
                onClickProp={(e) => {
                  e.preventDefault()
                  submitHandler()
                }}
                copy="Next"
              />
            </FormControl>
          </Box>
        </>
      )}
    </Layout>
  )
}