import React from 'react';
import PropTypes from 'prop-types';
import { TopBar, Main, SkipLink, MenuItem, Layout } from 'cauldron-react';
import Stats from '../Stats';
import Recipes from '../Recipes';
import './index.css';

const App = ({ recipes, stats, updateRecipe }) => (
  <div className="App">
    <SkipLink target={'#main-content'} />
    <TopBar role="banner">
      <MenuItem>awesome recipes</MenuItem>
    </TopBar>
    <Layout>
      <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
        <div className="App__head">
          <div className="confined">
            <h1 id="main-heading">Recipe Dashboard</h1>
          </div>
        </div>
        <Stats stats={stats} />
        <Recipes recipes={recipes} updateRecipe={updateRecipe} />
      </Main>
    </Layout>
  </div>
);

App.propTypes = {
  updateRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired
};
App.displayName = 'App';
export default App;
