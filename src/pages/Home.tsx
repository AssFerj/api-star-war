import React, { useEffect } from 'react';

import { Typography } from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import { reqPeople } from '../store/modules/PeoplesSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reqPeople);
  }, []);

  return (
    <>
      <Typography variant="h3">API Star Wars</Typography>
    </>
  );
};

export default Home;
