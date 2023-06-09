import { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import mailIcon from '../Pictures/mailIcon.png';
import wppIcon from '../Pictures/wppIcon.png';
import './Contact.css';
import { connect } from 'react-redux';

class Contact extends Component {
  render () {
    const { lang } = this.props;
    return (
      <>
        <Header />
        <section className='contactSec'>
          { lang === 'en'
            ? (
              <>
                <div className='contactDiv'>
                  <h2 className='contactTitle'>
                    Contact me!
                  </h2>
                </div>
                <div className='contactInfoDiv'>
                  <div className="iconsDiv">
                    <a target="_blank" href={ 'https://www.linkedin.com/in/dev-igor-carvalho/' }>
                      <i id="linkedin" className="devicon-linkedin-plain colored"></i>
                    </a>
                    <a target="_blank" href={ 'https://www.github.com/igorrCarvalho' }>
                      <i id="gitHub" className="devicon-github-original"></i>
                    </a>
                    <a target="_blank" href="https://wa.me/5531998384667" className='contactLink'>
                      <img src={ wppIcon } alt="phone icon" className="wppIcon" />
                    </a>
                  </div>
                  <div className="contactLinkDiv">
                    <img src={ mailIcon } alt="mail icon" />
                    <a className='contactLink'>{ `igorsilvabhz6@gmail.com` }</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='contactDiv'>
                  <h2 className='contactTitle'>
                    Fale comigo!
                  </h2>
                </div>
                <div className='contactInfoDiv'>
                  <div className="iconsDiv">
                    <a target="_blank" href={ 'https://www.linkedin.com/in/dev-igor-carvalho/' }>
                      <i id="linkedin" className="devicon-linkedin-plain colored"></i>
                    </a>
                    <a target="_blank" href={ 'https://www.github.com/igorrCarvalho' }>
                      <i id="gitHub" className="devicon-github-original"></i>
                    </a>
                    <a target="_blank" href="https://wa.me/5531998384667" className='contactLink'>
                      <img src={ wppIcon } alt="phone icon" className="wppIcon" />
                    </a>
                  </div>
                  <div className="contactLinkDiv">
                    <img src={ mailIcon } alt="mail icon" />
                    <a className='contactLink'>{ `igorsilvabhz6@gmail.com` }</a>
                  </div>
                </div>
              </>
            )
          }
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ lang }) => ({
  lang,
});

export default connect(mapStateToProps)(Contact);
