import { Component } from 'react';
import Header from '../components/Header';
import './InitialPage.css';
import igorImg from '../Pictures/igorImg.jpeg';
import { abtMeText } from '../utils/phrases';
import djangoImg from '../Pictures/djangoImg.png';
import dockerImg from '../Pictures/dockerImg.png';
import JavaScriptlogo from '../Pictures/JavaScript-logo.png';
import mongoDBImg from '../Pictures/mongoDBImg.png';
import mySQLImg from '../Pictures/mySQLImg.png';
import nodeJs from '../Pictures/node-js.png';
import pythonLogo from '../Pictures/pythonLogo.png';
import reactLogo from '../Pictures/reactLogo.png';
import typeScriptImg from '../Pictures/typeScriptImg.png';
import { connect } from 'react-redux';

class InitialPage extends Component {
  render() {
    const { lang } = this.props;
    const { text_en, text_pt } = abtMeText
    return (
      <>
        <Header />
        <main>
          { lang === 'en'
            ? (
              <>
                <section className='abtMeSection'>
                  <div>
                    <img className='igorPhoto' src={ igorImg } alt='Igor' />
                  </div>
                  <div>
                    <div className='nameDiv'>
                      <h2 className='hiText'>Hi!</h2>
                      <h3 className='nameText'>I'm Igor.</h3>
                    </div>
                    <div className='abtDiv'>
                      <p className='abtMeText'>{ text_en }</p>
                    </div>
                  </div>
                </section>
                <section className='techSection'>
                  <h3 className='techTitle'>Some technologies i use</h3>
                  <div>
                    <img src={ reactLogo } alt='React' className='reactLogo' />
                    <img src={ pythonLogo } alt='Python' className='techLogo' />
                    <img src={ djangoImg } alt='Django' className='techLogo' />
                    <img src={ nodeJs } alt='Nodejs' className='nodeLogo' />
                    <img src={ JavaScriptlogo } alt='JavaScript' className='techLogo' />
                    <img src={ dockerImg } alt='Docker' className='dockerLogo' />
                    <img src={ typeScriptImg } alt='TypeScript' className='techLogo' />
                    <img src={ mongoDBImg } alt='MongoDB' className='mongoDBLogo' />
                    <img src={ mySQLImg } alt='MySQL' className='mySQLLogo' />
                  </div>
                </section>
              </>
            ) : (
              <>
                <section className='abtMeSection'>
                  <div>
                    <img className='igorPhoto' src={ igorImg } alt='Igor' />
                  </div>
                  <div>
                    <div className='nameDiv'>
                      <h2 className='hiText'>Olá!</h2>
                      <h3 className='nameText'>Sou o Igor.</h3>
                    </div>
                    <div className='abtDiv'>
                      <p className='abtMeText'>{ text_pt }</p>
                    </div>
                  </div>
                </section>
                <section className='techSection'>
                  <h3 className='techTitle'>Algumas tecnologias que eu utilizo</h3>
                  <div>
                    <img src={ reactLogo } alt='React' className='reactLogo' />
                    <img src={ pythonLogo } alt='Python' className='techLogo' />
                    <img src={ djangoImg } alt='Django' className='techLogo' />
                    <img src={ nodeJs } alt='Nodejs' className='nodeLogo' />
                    <img src={ JavaScriptlogo } alt='JavaScript' className='techLogo' />
                    <img src={ dockerImg } alt='Docker' className='dockerLogo' />
                    <img src={ typeScriptImg } alt='TypeScript' className='techLogo' />
                    <img src={ mongoDBImg } alt='MongoDB' className='mongoDBLogo' />
                    <img src={ mySQLImg } alt='MySQL' className='mySQLLogo' />
                  </div>
                </section>
              </>
            )
          }
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(InitialPage);
