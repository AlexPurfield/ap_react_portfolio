import React from 'react';

import '../style/Portfolio.css';

export default function Portfolio() {
  return (
    <div className="container mt-4 about-container">
      <h1 className="display-4 text-pink">Portfolio</h1>
      <div className="card-container">
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/password_generator.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">
              A password generator that features dynamically updated HTML and CSS powered by JavaScript. 
            </p>
            <a href="https://alexpurfield.github.io/password-generator/" className="btn light-grey-button">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/password-generator" className="btn light-grey-button">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/coding_quiz.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Coding Quiz</h5>
            <p className="card-text">
              A multiple choice quiz created with dynamic HTML and CSS powered by JavaScript.
            </p>
            <a href="https://alexpurfield.github.io/code-quiz/ " className="btn light-grey-button">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/code-quiz" className="btn light-grey-button">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/harry_potter_fan.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Harry Potter Fan Page</h5>
            <p className="card-text">
              A group project that showcased front-end skills and applied Agile development. 
            </p>
            <a href="https://nfillip.github.io/harrypotter-fanpage/" className="btn light-grey-button">
              Live Site
            </a>
            <a href="https://github.com/nfillip/harrypotter-fanpage" className="btn light-grey-button">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/little_site_of_horrors.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Little Site of Horrors</h5>
            <p className="card-text">
              A full-stack application displaying front and back end building by a group. 
            </p>
            <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/" className="btn light-grey-button">
              Live Site
            </a>
            <a href="https://github.com/ljkahn/littleSiteOfHorrors" className="btn light-grey-button">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/note_taker.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">
            This is a note taking application to write that was made using the Express Node web framework.
            </p>
            <a href="https://secure-eyrie-45837-d5923870e1a2.herokuapp.com/" className="btn light-grey-button">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/ap_note_taker" className="btn light-grey-button">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/workday_scheduler.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Workday Scheduler</h5>
            <p className="card-text">
            A simple calendar application that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.
            </p>
            <a href="https://alexpurfield.github.io/work_day_scheduler/" className="btn light-grey-button">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/work_day_scheduler" className="btn light-grey-button">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
