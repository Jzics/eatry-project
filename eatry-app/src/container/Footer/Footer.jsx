import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import {images} from "../../constants"

const Footer = () => (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St. New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='logo' />
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiLinkedin />
        </div>
      </div>
      <div className='app__footer-links_work'>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Gericht. All Right reserved.</p>
    </div>
  </div>
);

export default Footer;
