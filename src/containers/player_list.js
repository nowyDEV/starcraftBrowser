import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  renderPlayer(playerData) {
    const player = playerData.objects[0];
    const liquipedia_link = `http://wiki.teamliquid.net/starcraft2/${player.lp_name}`;

    // Conversion to money format
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    const earnings = formatter.format(player.total_earnings);

    return (
      <tr key={player.id}>
        <td><a href={liquipedia_link} target="_blank">{player.tag}</a></td>
        <td>{player.name}</td>
        <td>{player.birthday}</td>
        <td>{player.race}</td>
        <td>{player.country}</td>
        <td>{player.current_teams[0].team.name}</td>
        <td>{earnings}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Player</th>
            <th>Full name</th>
            <th>Birthdate</th>
            <th>Race</th>
            <th>Country</th>
            <th>Team</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <tbody>
          {this.props.player.map(this.renderPlayer)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ player }) { // player === state.player
  return { player }; // { player } === { player: player }
}

export default connect(mapStateToProps)(PlayerList);