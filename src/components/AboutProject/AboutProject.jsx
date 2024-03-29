import React from 'react';

function AboutProject() {
  const INTRO_TITLE = 'О проекте';
  const INTRO_ABOUT_TITLE_LEFT = 'Дипломный проект включал 5 этапов';
  const INTRO_ABOUT_SUBTITLE_LEFT = 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.';
  const INTRO_ABOUT_TITLE_RIGHT = 'На выполнение диплома ушло 5 недель';
  const INTRO_ABOUT_SUBTITLE_RIGHT = 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.';

  return (
    <section className="intro">
                <a href='./' name="intro"> </a>
                <div className="intro__container">
                    <h2 className="intro__head-title">{INTRO_TITLE}</h2>

                    <div className="intro__about-container">
                        <div className="intro__about">
                            <h3 className="intro__about-title">{INTRO_ABOUT_TITLE_LEFT}</h3>
                            <p className="intro__about-subtitle">{INTRO_ABOUT_SUBTITLE_LEFT}</p>
                        </div>
                        <div className="intro__about">
                            <h3 className="intro__about-title">{INTRO_ABOUT_TITLE_RIGHT}</h3>
                            <p className="intro__about-subtitle">{INTRO_ABOUT_SUBTITLE_RIGHT}</p>
                        </div>
                    </div>

                    <div className="intro__stages-container">
                        <div className="intro__stages">
                                <p className="intro__stage-text intro__stage-left intro__stage-text-black intro__stage-left-green">1 неделя</p> 
                                <p className="intro__stage-text intro__stage-right intro__stage-text-white intro__stage-right-gray">4 недели</p> 
                        </div>

                        <div className="intro__stages">
                                <p className="intro__stage-text intro__stage-left intro__stage-text-gray">Back-end</p> 
                                <p className="intro__stage-text intro__stage-right intro__stage-text-gray">Front-end</p> 
                        </div>
                    </div>

                </div>
            </section>
  )
}

export default AboutProject;
