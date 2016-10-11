import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // fetch data
    this.props.fetchPlayer(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
          <input type="text"
                 value={this.state.term}
                 placeholder="Player name"
                 className="form-control"
                 onChange={this.onInputChange.bind(this)}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Add</button>
          </span>
        </form>
        <p className="small">E.g. Mana, Nerchio, Flash</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlayer }, (dispatch));
}

export default connect(null, mapDispatchToProps)(SearchBar);