import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilms } from '../../actions/films';

import Table from '../commons/table/simpleTable';

const Movies = () => {
  const dispatch = useDispatch()
  const films = useSelector(state => state.films)

  useEffect(() => {
    if (!films.data.results && !films.isFetching) dispatch(getFilms());
  }, []);

  return (
    <Table
      title="Peliculas"
      data={films}
      from="movies"
    />
  );
};

export default Movies;
