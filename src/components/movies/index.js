import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilms } from '../../actions/films';

import Table from '../commons/table/simpleTable';

const Movies = ({ handleDrawerChange }) => {
  const dispatch = useDispatch()
  const films = useSelector(state => state.films)

  useEffect(() => {
    if (!films.data.results) dispatch(getFilms());
  }, []);

  return (
    <Table
      title="Peliculas"
      films={films}
      handleDrawerChange={handleDrawerChange}
    />
  );
};

export default Movies;
