import { Component } from 'react';
import Header from '../components/Header';
import './Experience.css';
import experienceData from '../utils/experienceData';
import { connect } from 'react-redux';

class Experience extends Component {
  render() {
    const { lang } = this.props;
    return (
      <>
        <Header />
        <section className='experienceSec'>
          { lang === 'en'
            ? (
              <>
                <div className='expIntroductionDiv'>
                  <h3 className='expIntroduction'>Here are some projects i have already done</h3>
                </div>
                <div className='allProjectsDiv'>
                  { experienceData.map((obj, index) => (
                    <div className='bigProjectDiv' key={ index }>
                      <h2 className='projectTitle'>{ obj.title }</h2>
                      <div className='projectDiv'>
                        <h4 className='projectDescription'>{ obj.en_text }</h4>
                        <img className='projectImg' src={ obj.data } alt='project' />
                      </div>
                      <a href={ obj.repo } target='_blank' className='repoLink'>{ `Repositorie` }</a>
                      <div className='divisor'>-</div>
                    </div>
                  )) }
                </div>
              </>
            ) : (
              <>
                <div className='expIntroductionDiv'>
                  <h3 className='expIntroduction'>Aqui estão alguns projetos que eu já fiz</h3>
                </div>
                <div className='allProjectsDiv'>
                  { experienceData.map((obj, index) => (
                    <div className='bigProjectDiv' key={ index }>
                      <h2 className='projectTitle'>{ obj.title }</h2>
                      <div className='projectDiv'>
                        <h4 className='projectDescription'>{ obj.pt_text }</h4>
                        <img className='projectImg' src={ obj.data } alt='project' />
                      </div>
                      <a href={ obj.repo } target='_blank' className='repoLink'>{ `Repositorie` }</a>
                      <div className='divisor'>-</div>
                    </div>
                  )) }
                </div>
              </>
            )
          }
        </section>
      </>
    )
  }
}

const mapStateToProps = ({ lang }) => ({
  lang,
});

export default connect(mapStateToProps)(Experience);
