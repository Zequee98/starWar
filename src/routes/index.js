import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Character from '../components/characters';

const routes = () => (
  <Router>
    <Route exact path="/" component={Character} />
  </Router>
);

export default routes;
