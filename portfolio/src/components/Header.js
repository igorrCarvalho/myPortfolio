import { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import myLogo from '../Pictures/myLogo.png';

class Header extends Component {
  render() {
    return (
      <div className="headerDiv">
        <img src={ myLogo } alt='Igor logo' className='myLogo' />
        <Link to="/" className='headerLink'>
          About me
        </Link>
        <Link to="/experience" className='headerLink'>
          Experience
        </Link>
        <Link className='headerLink'>
          Contact me
        </Link>
      </div>
    );
  }
}

export default Header;
