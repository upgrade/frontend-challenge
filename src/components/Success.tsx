import React, { memo } from 'react';
import { Button, Image } from 'antd';
import checkmark from '../images/checkmark.png';

const Success = memo(() => {
  return (
    <>
      <h1>Success!</h1>
      <div style={{marginBottom: '1rem'}}><Image width={50} src={checkmark}/></div>
      <div style={{marginBottom: '2rem'}}>You should receive a confirmation email soon.</div>
      <div>
          <Button type="primary" onClick={() => window.location.href = `/`}>
              Restart
          </Button>
      </div>
    </>
  );
});

export default Success;
