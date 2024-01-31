import React from 'react';

function Techs() {

  const INTRO_TITLE_TEXT = 'Технологии';
  const TECHNOLOGIES_TITLE_TEXT = '7 технологий';
  const TECHNOLOGIES_SUBTITLE_TEXT = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.';

  return (
    <section className="technologies">
                <div className="technologies__container">
                    <div className="intro__title-container">
                        <h2 className="intro__title">{INTRO_TITLE_TEXT}</h2>
                    </div>

                    <h2 className="technologies__title">{TECHNOLOGIES_TITLE_TEXT}</h2>
                    <p className="technologies__subtitle">{TECHNOLOGIES_SUBTITLE_TEXT}</p>

                    <div className="technologies__card-container">
                        <div className="technologies__card">
                            <p className="technologies__card-text">HTML</p>
                        </div>
                        <div className="technologies__card">
                            <p className="technologies__card-text">CSS</p>
                        </div>
                        <div className="technologies__card">
                            <p className="technologies__card-text">JS</p>
                        </div>
                        <div className="technologies__card">
                            <p className="technologies__card-text">React</p>
                        </div>
                        <div className="technologies__card">
                            <p className="technologies__card-text">Git</p>
                        </div>
                        <div className="technologies__card">
                            <p className="technologies__card-text">Express.js</p>
                        </div>
                        <div className="technologies__card">
                            <p className="technologies__card-text">mongoDB</p>
                        </div>
                    </div>
                </div>
      </section>
  )
}

export default Techs;
