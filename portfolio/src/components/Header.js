import { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import myLogo from '../Pictures/myLogo.png';
import { connect } from 'react-redux';
import changeLang from '../redux/actions';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      language: 'en',
    }
    this.handleLangChoosal = this.handleLangChoosal.bind(this);
  }

  handleLangChoosal(e) {
    const { dispatch, lang } = this.props;
    const { value } = e.target;
    this.setState({
      language: value,
    });
    dispatch(changeLang(value));
  }

  render() {
    const { lang } = this.props;
    const { language } = this.state;
    return (
      <header className="headerDiv">
        { lang === 'en'
          ? (
            <>
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
              <select className='input' value={ language } onChange={ this.handleLangChoosal }>
                <option value='en'>English</option>
                <option value='pt'>Portuguese</option>
              </select>
              </div>
            </>
        )
        : (
          <>
            <img src={ myLogo } alt='Igor logo' className='myLogo' />
              <Link to="/" className='headerLink'>
                Sobre Mim
              </Link>
              <Link to="/experience" className='headerLink'>
                Experiência
              </Link>
              <Link to="/contact" className='headerLink'>
                Fale comigo
              </Link>
              <div className='inputDiv'>
                <h4 className='inputText'>Escolha sua língua</h4>
              <select className='input' value={ language } onChange={ this.handleLangChoosal }>
                <option value='en'>Inglês</option>
                <option value='pt'>Português</option>
              </select>
              </div>
          </>
        )
      }
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(Header);
