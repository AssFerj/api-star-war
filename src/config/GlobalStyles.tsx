import { GlobalStyles } from '@mui/material';
import React from 'react';

const GStyles: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        body: {
          height: '100vh',
          padding: '0px',
          margin: '0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundImage: 'url("/assets/images/space.jpeg")',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: '#ffffff'
        }
      }}
    />
  );
};

export default GStyles;
