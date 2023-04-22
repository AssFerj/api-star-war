import React, { useEffect, useState } from 'react';

import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { reqPeople, selectAll } from '../store/modules/PeoplesSlice';
import { Link } from 'react-router-dom';
import PeopleType from '../types/PeopleType';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const persons = useAppSelector(selectAll);
  const [count, setCount] = useState<number>(1);
  const [busca, setBusca] = useState<string>('');
  const [filterName, setFilterName] = useState<PeopleType[]>([]);

  useEffect(() => {
    const filter = persons.filter(item => item.name);
    setFilterName(filter);
    console.log(filterName);
  }, [busca]);

  useEffect(() => {
    if (count <= 0) {
      alert('Página não encontrada');
      setCount(1);
    } else {
      dispatch(reqPeople(count));
    }
  }, [count]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ color: '#fffb25' }}>
            API Star Wars - Personagens
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={busca}
            onChange={e => setBusca(e.target.value)}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          {/* <SelectComponent /> */}
        </Grid>
      </Grid>

      <Grid mt={3}>
        <Grid item spacing={2} sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly' }}>
          {persons.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Link to={''}>
                  <Paper
                    elevation={3}
                    sx={{
                      // textAlign: 'center',
                      padding: '1rem',
                      margin: '.5rem',
                      backgroundColor: '#2d2d2d',
                      color: '#ffffff'
                    }}
                  >
                    <Typography variant="body1">
                      <>
                        <strong>Nome:</strong>
                      </>{' '}
                      {item.name}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Genero:</strong> {item.gender}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Altura:</strong> {item.height}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Cor dos Olhos:</strong> {item.eye_color}
                    </Typography>
                  </Paper>
                </Link>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
      <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={() => setCount(count - 1)}>
          Preview
        </Button>
        <Typography>{count}</Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default Home;
