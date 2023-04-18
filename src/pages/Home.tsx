import React, { useEffect } from 'react';

import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { reqPeople, selectAll } from '../store/modules/PeoplesSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const persons = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(reqPeople());
  }, []);

  return (
    <>
      <Typography variant="h3">API Star Wars</Typography>
    </>
  );
};

export default Home;
