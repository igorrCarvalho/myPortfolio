import { Route } from 'react-router-dom';
import { Component } from 'react';
import InitialPage from './pages/InitialPage';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ InitialPage }/>
        <Route path="/experience" component={ Experience } />
        <Route path="/contact" component={ Contact } />
      </>
    );
  }
}

export default Routes;
