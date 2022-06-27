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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas aspernatur autem, at neque distinctio illo consectetur. Aspernatur aperiam voluptates tempora dolores sint ab totam consequatur. Eligendi architecto cupiditate quasi!
        </p>
        </div>
      </div>
      
      <div className="intro-right">
        <div className="intro-right-wrapper">
        need to put something cool over here...
        </div>
      </div>

    </div>
  )
}
