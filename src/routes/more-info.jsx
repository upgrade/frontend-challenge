import { useEffect, useState } from "react";
import { useInfo } from "../store/info-provider";
import { useNavigate, useLoaderData, Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "../components/Button"
import Layout from "../components/Layout";
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import { isMoreInfoValid } from "../util/validator";

export default function MoreInfo() {  
  const navigate = useNavigate()  
  const colors = useLoaderData() // returns data from /api/colors
  const { dispatch, state } = useInfo()
  
  const [color, setColor] = useState(state.color)
  const [checked, setChecked] = useState(state.terms);
  const [validationErrs, setValidationErrs] = useState({})

  useEffect(() => {
    if(color !== null || checked !== null) {
      runValidation()
    }
  }, [color, checked])

  const runValidation = () => {
    if( color === null && checked === null) {
      return false
    }

    const validation = isMoreInfoValid(color, checked)
    if (validation.valid) {
      setValidationErrs([])
      return true      
    }else{
      setValidationErrs(validation.errors)
      return false
    } 
  }

  const submitHandler = () => {
    if (runValidation()) {
      dispatch({type:'color', color, terms: checked})
      navigate('/confirmation')
    }
  }

  const isColorError = validationErrs["color"] && validationErrs["color"].length > 0
  const colorErrors = isColorError ? validationErrs["color"].reduce((acc, curr) => acc += "\n" + curr) : ""

  const isTermsError = validationErrs["terms"] && validationErrs["terms"].length > 0
  const termsErrors = isTermsError ? validationErrs["terms"].reduce((acc, curr) => acc += "\n" + curr) : ""

  return (
    <Layout>
      <h1>Additional Info</h1>
      <Box sx={{ minWidth: 120 }}>     
        <FormControl fullWidth error={isColorError}>
          <InputLabel id="favorite-color-choice">Favorite Color</InputLabel>
          <Select 
            name="colors" id="color-select" 
            value={color} 
            onChange={(newColor) => {
              setColor(newColor.target.value)
            }}
          >
            {colors.map(colorChoice => {
              return <MenuItem value={colorChoice}>{colorChoice}</MenuItem>
            })}
          </Select>
          <FormHelperText>{colorErrors}</FormHelperText>
        </FormControl>

        <FormControl fullWidth sx={{marginTop: 4}} error={isTermsError}>
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={checked} onChange={() => {
                setChecked(!checked)
              }}/>} 
              label={
                <label for="terms">I agree to <Link to={`/terms-conditions`} target="_blank">Terms and Conditions</Link></label>
              }
            />
            <FormHelperText>{termsErrors}</FormHelperText>
          </FormGroup>          
        </FormControl>
      </Box>

      <Box sx={{ marginTop: 10 }}>
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
            copy="Next"
          />
        </Stack>
      </Box>
    </Layout>
  );
}