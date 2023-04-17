import { Route } from 'react-router-dom';
import { Component } from 'react';
import InitialPage from './pages/InitialPage';
import Experience from './pages/Experience';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ InitialPage }/>
        <Route path="/experience" component={ Experience } />
      </>
    );
  }
}

export default Routes;
