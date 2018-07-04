import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
//Testing
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';





document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
