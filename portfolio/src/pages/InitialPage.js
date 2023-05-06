import { Component } from 'react';
import Header from '../components/Header';
import './InitialPage.css';
import myPhoto from '../Pictures/myPhoto.jpeg';
import { abtMeText } from '../utils/phrases';

class InitialPage extends Component {
  render() {
    const { text } = abtMeText
    return (
      <>
        <Header />
        <main>
          <section className='abtMeSection'>
            <div>
              <img className='igorPhoto' src={ myPhoto } alt='Igor' />
            </div>
            <div>
              <div className='nameDiv'>
                <h2 className='hiText'>Hi!</h2>
                <h3 className='nameText'>I'm Igor.</h3>
              </div>
              <div className='abtDiv'>
                <p className='abtMeText'>{ text }</p>
              </div>
            </div>
          </section>
          <section className='techSection'>
            <h3 className='techTitle'>Some technologies i use</h3>
            <div>
              <i id='reactTechLogo' class="devicon-react-original-wordmark colored"></i>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default InitialPage;
