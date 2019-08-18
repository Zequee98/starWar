import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Character from '../components/characters';

const routes = ({ handleDrawerChange }) => (
  <Router>
    <Route exact path="/" component={() => <Character handleDrawerChange={handleDrawerChange} />} />
  </Router>
);

export default routes;
