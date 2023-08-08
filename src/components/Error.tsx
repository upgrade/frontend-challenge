import React, { memo } from 'react';
import { Button, Image } from 'antd';
import failure from '../images/failure.png';

const Error = memo(() => {
  return (
    <>
      <h1>Error</h1>
      <div style={{marginBottom: '1rem'}}><Image width={50} src={failure}/></div>
      <div style={{marginBottom: '2rem'}}>Uh oh, something went wrong. Please try again later.</div>
      <div>
          <Button type="primary" onClick={() => window.location.href = `/`}>
              Restart
          </Button>
      </div>
    </>
  );
});

export default Error;
