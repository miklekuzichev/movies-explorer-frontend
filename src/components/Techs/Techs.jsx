import React from 'react';

function Techs() {

  const INTRO_TITLE_TEXT = 'Технологии';
  const TECHNOLOGIES_TITLE_TEXT = '7 технологий';
  const TECHNOLOGIES_SUBTITLE_TEXT = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.';

  return (
    <section className="technologies">
                <div className="technologies__container">
                    
                        <h2 className="technologies__head-title">{INTRO_TITLE_TEXT}</h2>
                    

                    <h3 className="technologies__title">{TECHNOLOGIES_TITLE_TEXT}</h3>
                    <p className="technologies__subtitle">{TECHNOLOGIES_SUBTITLE_TEXT}</p>

                    <ul className="technologies__card-container">
                        <li className="technologies__card">
                            <p className="technologies__card-text">HTML</p>
                        </li>
                        <li className="technologies__card">
                            <p className="technologies__card-text">CSS</p>
                        </li>
                        <li className="technologies__card">
                            <p className="technologies__card-text">JS</p>
                        </li>
                        <li className="technologies__card">
                            <p className="technologies__card-text">React</p>
                        </li>
                        <li className="technologies__card">
                            <p className="technologies__card-text">Git</p>
                        </li>
                        <li className="technologies__card">
                            <p className="technologies__card-text">Express.js</p>
                        </li>
                        <li className="technologies__card">
                            <p className="technologies__card-text">mongoDB</p>
                        </li>
                    </ul>
                </div>
      </section>
  )
}

export default Techs;
