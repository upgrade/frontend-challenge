import { useNavigate } from "react-router-dom";
import { useInfo } from "../store/info-provider";

import Box from '@mui/material/Box';
import Button from "../components/Button"
import Layout from "../components/Layout";

export default function Success() {
  const {dispatch} = useInfo()
  const navigate = useNavigate()
    return (
      <Layout id="confirmation">
          <h1>Success</h1>
          <span>You should recieve a confirmation letter soon</span>
          <Box sx={{marginTop: 4}}>
          <Button 
            onClickProp={() => {
              dispatch({type:'restart'})
              navigate('/')
            }}
            copy="Restart"
          />
        </Box>
      </Layout>
    );
  }