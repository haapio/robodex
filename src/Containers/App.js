import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import { connect } from 'react-redux';
import { setSearchTerm, requestRobots } from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {
      searchTerm: state.search.searchTerm,
      robots: state.robots.robots,
      isPending: state.robots.isPending,
      error: state.robots.error,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchTerm(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots),
  }
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { onSearchChange, searchTerm, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={onSearchChange}/>
        {error ? <h2> Error </h2>: null}
        <Scroll>
          {isPending ? <h2>Loading...</h2> : <CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    );
  }
}

App.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  robots: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
  onRequestRobots: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
