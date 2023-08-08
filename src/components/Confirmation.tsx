import React, { memo, useCallback, useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { submit } from '../redux/api';

const Confirmation = memo(() => {
    const signUp = useSelector(state => state.signUp);
    const moreInfo = useSelector(state => state.moreInfo);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(
        async () => {
            try {
              await submit({...signUp, ...moreInfo});
              localStorage.setItem('upgrade-state', null);
              navigate(`/success`);
            } catch {
              navigate(`/error`);
            }
        },
        []
    );

  return (
    <>
    {isLoading ? <ClipLoader color="#000"/> :
      <>
          <h1 style={{marginBottom: '2rem'}}>Confirmation</h1>
          <div style={{marginBottom: '1rem'}}>
              name: {signUp?.name}
          </div>
          <div style={{marginBottom: '1rem'}}>
              email: {signUp?.email}
          </div>
          <div style={{marginBottom: '1rem'}}>
              password: {signUp?.password}
          </div>
          <div style={{marginBottom: '1rem'}}>
              color: {moreInfo?.color}
          </div>
          <div style={{marginBottom: '2rem'}}>
              terms: {moreInfo?.terms ? `Agreed` : `Declined`}
          </div>
          <div>
              <Button style={{marginRight: '1rem'}} type="primary" onClick={() => navigate(`/more-info`)}>
                  Back
              </Button>
              <Button type="primary" onClick={() => onSubmit()}>
                  Submit
              </Button>
          </div>
      </>}
    </>
  );
});

export default Confirmation;
