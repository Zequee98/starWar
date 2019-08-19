import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCharacters } from '../../actions/characters';

import Table from '../commons/table/simpleTable';

const Movies = ({ handleDrawerChange }) => {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)

  useEffect(() => {
    if (!characters.data.results) dispatch(getCharacters());
  }, []);

  return (
    <Table
      title="Personajes"
      films={characters}
      handleDrawerChange={handleDrawerChange}
    />
  );
};

export default Movies;
