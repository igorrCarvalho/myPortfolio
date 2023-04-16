import { Route } from 'react-router-dom';
import { Component } from 'react';
import InitialPage from './pages/InitialPage';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ InitialPage }/>
      </>
    );
  }
}

export default Routes;
