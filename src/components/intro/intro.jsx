import React from 'react';
import  "./intro.css";
import FakeWindow from '../fakeWindow/FakeWindow';
export default function Intro({darkMode}) {

  return (
    <div className='intro'>
      <div className="intro-left">
        <div className='intro-left-wrapper'>

          <h1 className='intro-name'
            style={{
              color: darkMode? "#96a2ac":"#a67e6a"
            }}
          >Zakariyya Ahmed</h1>
        
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <FakeWindow darkMode={darkMode}/>
            </div>
          </div>
        <p className="intro-description">
          Hi, I am a self-taught web developer who loves creating and building things! Feel free to reach out to me on my socials below and thanks for visiting!
        </p>
        </div>
      </div>
      
      <div className="intro-right">
        <div className="intro-right-wrapper">
        Need to put something cool over here...
        </div>
      </div>

    </div>
  )
}
