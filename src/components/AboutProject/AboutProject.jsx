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
                    <div className="intro__title-container">
                        <h2 className="intro__title">{INTRO_TITLE}</h2>
                    </div>

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
                            <div className="intro__stage-left intro__stage-left_green">
                                <p className="intro__stage-text intro__stage-text_black">1 неделя</p> 
                            </div>
                            <div className="intro__stage-right intro__stage-right_gray">
                                <p className="intro__stage-text intro__stage-text_white">4 недели</p> 
                            </div>
                        </div>

                        <div className="intro__stages">
                            <div className="intro__stage-left">
                                <p className="intro__stage-text intro__stage-text_gray">Back-end</p> 
                            </div>
                            <div className="intro__stage-right">
                                <p className="intro__stage-text intro__stage-text_gray">Front-end</p> 
                            </div>
                        </div>
                    </div>

                </div>
            </section>
  )
}

export default AboutProject;
