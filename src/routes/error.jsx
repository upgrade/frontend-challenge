import { useNavigate } from "react-router-dom";
import { useInfo } from "../store/info-provider";

import Box from '@mui/material/Box';
import Button from "../components/Button"
import Layout from "../components/Layout";

export default function Error() {
  const {dispatch} = useInfo()
  const navigate = useNavigate()
  return (
    <Layout id="confirmation">
        <h1>Error</h1>
        <span>Uh Oh, Something went wrong. Please try again later</span>
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