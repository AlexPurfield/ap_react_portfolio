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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://alexpurfield.github.io/password-generator/" className="btn btn-primary">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/password-generator" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/coding_quiz.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Coding Quiz</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://alexpurfield.github.io/code-quiz/ " className="btn btn-primary">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/code-quiz" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/harry_potter_fan.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Harry Potter Fan Page</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://nfillip.github.io/harrypotter-fanpage/" className="btn btn-primary">
              Live Site
            </a>
            <a href="https://github.com/nfillip/harrypotter-fanpage" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/little_site_of_horrors.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Little Site of Horrors</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/" className="btn btn-primary">
              Live Site
            </a>
            <a href="https://github.com/ljkahn/littleSiteOfHorrors" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/note_taker.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://secure-eyrie-45837-d5923870e1a2.herokuapp.com/" className="btn btn-primary">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/ap_note_taker" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/workday_scheduler.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Workday Scheduler</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://alexpurfield.github.io/work_day_scheduler/" className="btn btn-primary">
              Live Site
            </a>
            <a href="https://github.com/AlexPurfield/work_day_scheduler" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
