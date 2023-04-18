import { Component } from "react";
import Header from "../components/Header";
import './Contact.css';

class Contact extends Component {
  render () {
    return (
      <>
        <Header />
        <section className='contactSec'>
          <div className='contactDiv'>
            <h2 className='contactTitle'>
              Contact me!
            </h2>
          </div>
          <div className='contactInfoDiv'>
            <h3 className='contactLink'>{ `LinkedIn: https://www.linkedin.com/in/dev-igor-carvalho/` }</h3>
            <h3 className='contactLink'>{ `gitHub: https://github.com/igorrCarvalho` }</h3>
            <h3 className='contactLink'>{ `Email: igorsilvabhz6@gmail.com` }</h3>
            <h3 className='contactLink'>{ `Phone: +55 (31) 99838-4667` }</h3>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
