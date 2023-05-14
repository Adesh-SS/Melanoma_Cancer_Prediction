import './App.css';
import React from 'react';
import Typewriter from "typewriter-effect";
import MouseIcon from '@mui/icons-material/Mouse';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from './page_logo.png';
import Button from './Button.js';
import Cards from './PreventionCards.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="NaviDiv">
          <img src={logo} alt='web logo' className="App-logo" />
          <div className='navibar'>
            <ul>
              <li>
                <a href='#prevention'>
                  <span class='box'>
                    Prevention
                  </span>
                </a>
              </li>
              <li>
                <a href='#predict'>
                  <span class="box">
                    Predict
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div> 
        <h2 className='TitleBefore'>This is about: </h2>
        <div className='TypeWord'>
          <Typewriter onInit={(typewriter)=> {
              typewriter
              .typeString("MELANOMA CANCER PREDICTION")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Find Your Stage")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Know The Preventions")
              .pauseFor(1000)
              .deleteAll()
              .typeString("MELANOMA CANCER PREDICTION")
              .start();
              }}
            />
        </div>
        <div className='JumpInTag'>
          <p>Jump Right In </p>
          <div><MouseIcon /></div>
        </div>
        <div className='Socials'>
          <InstagramIcon style={{fontSize:'larger', marginBottom: '.3em'}}/>
          <LinkedInIcon style={{fontSize:'larger', marginBottom: '.3em'}}/>
          <WhatsAppIcon style={{fontSize:'larger', marginBottom: '.3em'}}/>
          <TwitterIcon style={{fontSize:'larger', marginBottom: '.3em'}}/>
        </div>
      </header>
      <div className='PredictSpace' id='predict'>
        <div className='PredictSpace-BorderDiv'>
          <div className='PredictSpace-GradientDiv'></div>
        </div>
        <div className='PredictionFolder'>
          <h2>What is Melanoma ? </h2>
          <p className='PredictionFolder-TextArea'>Melanoma is a type of skin cancer that develops from melanocytes, 
            the cells that produce the pigment melanin, which gives color to the skin, 
            hair, and eyes. Melanoma is considered the most serious type of skin cancer because 
            it can spread quickly to other parts of the body, including the lymph nodes and organs</p>
            <hr />
            <div className='PredictionFolder-ButtonDiv'>
              <Button />
            </div>
        </div>
      </div>
      <div className='PreventionSpace' id='prevention'><Cards /></div>
    </div>
  );
}

export default App;
