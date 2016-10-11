import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import PlayerList from '../containers/player_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PlayerList />
      </div>
    );
  }
}
