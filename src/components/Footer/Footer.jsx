import React from 'react';

function Footer() {

  const FOOTER_TITLE = 'Учебный проект Яндекс.Практикум х BeatFilm.';

  return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">{FOOTER_TITLE}</p>
                <div className="footer__links-container">
                    <p className="footer__copyright">&copy;2023</p>
                    <nav>
                        <ul className="footer__links">
                          <li><a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a></li>
                          <li><a href="https://github.com/miklekuzichev" target="_blank" rel="noreferrer" className="footer__link">Github</a></li>
                        </ul>
                    </nav>
                    
                </div>
            
            </div>
        </footer>
  )
}

export default Footer;
