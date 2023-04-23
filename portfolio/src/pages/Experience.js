import { Component } from 'react';
import Header from '../components/Header';
import './Experience.css';
import experienceData from '../utils/experienceData';

class Experience extends Component {
  render() {
    return (
      <>
        <Header />
        <section className='experienceSec'>
          <div className='expIntroductionDiv'>
            <h3 className='expIntroduction'>Here are some projects i have already done</h3>
          </div>
          <div className='allProjectsDiv'>
            { experienceData.map((obj, index) => (
              <>
                <div className='projectDiv'>
                  <h4 className='projectDescription'>{ obj.text }</h4>
                  <img className='projectImg' src={ obj.data } alt='project' />
                </div>
                <p className='repoLink'>{ `Repositorie: ${ obj.repo }` }</p>
                <div className='divisor'>-</div>
              </>
            )) }
          </div>
        </section>
      </>
    )
  }
}

export default Experience;
