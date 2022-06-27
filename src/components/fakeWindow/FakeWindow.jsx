import React from 'react';
import "./fakeWindow.css";
import Typewriter from 'typewriter-effect';


export default function FakeWindow({darkMode}) {
  return (
    <div className='fw-container'>
      <div className="fw-toolbar">
        <div className="fw-buttons">
          <span class="fw-dot red"></span>
          <span class="fw-dot yellow"></span>
          <span class="fw-dot green"></span>
        </div>
      </div>
      <div className="fw-content" style={{
        backgroundColor:darkMode && "white",
        color: darkMode && "#171b18"}}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString('<span> Finance Graduate</span>')
            .pauseFor(1000)
            .typeString('<br/><span>Web Developer</span>')
            .pauseFor(1000)
            .typeString('<br/><span>Data Enthusiast</span>')
            .pauseFor(1000)
            .typeString('</br><span>Digital Artist</span>')
            .pauseFor(1000)
            .deleteChars(14)
            .typeString('*Self-proclaimed* Digital Artist')
            .start()
          }}
        />
      </div>
    </div>
  )
}
