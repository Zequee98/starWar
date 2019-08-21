import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCharacters } from '../../actions/characters';

import Table from '../commons/table/simpleTable';

const Movies = () => {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)

  useEffect(() => {
    if (!characters.data.results && !characters.isFetching) dispatch(getCharacters());
  }, []);

  return (
    <Table
      title="Personajes"
      data={characters}
      from="characters"
    />
  );
};

export default Movies;
