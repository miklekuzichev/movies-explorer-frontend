import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  const FOOTER_TITLE = 'Учебный проект Яндекс.Практикум х BeatFilm.';

  return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">{FOOTER_TITLE}</p>
                <div className="footer__links-container">
                    <p className="footer__copyright">&copy; 2023</p>
                    <nav>
                        <ul className="footer__links">
                          <li><Link className="footer__link" target="_blank" rel="noreferrer" to="https://practicum.yandex.ru/">Яндекс.Практикум</Link></li>
                          <li><Link className="footer__link" target="_blank" rel="noreferrer" to="https://github.com/miklekuzichev">Github</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
  )
}

export default Footer;
