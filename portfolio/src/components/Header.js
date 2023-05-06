import { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import myLogo from '../Pictures/myLogo.png';

class Header extends Component {
  render() {
    return (
      <header className="headerDiv">
        <img src={ myLogo } alt='Igor logo' className='myLogo' />
        <Link to="/" className='headerLink'>
          About me
        </Link>
        <Link to="/experience" className='headerLink'>
          Experience
        </Link>
        <Link to="/contact" className='headerLink'>
          Contact me
        </Link>
        <div className='inputDiv'>
          <h4 className='inputText'>Select your language</h4>
          <select className='input'>
            <option>English</option>
            <option>Portuguese</option>
          </select>
        </div>
      </header>
    );
  }
}

export default Header;
