import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {

  return (
    <ul className="student__portfolio-links">
        <li className="student__portfolio-link">
            <Link className="student__portfolio-title" target="_blank" rel="noreferrer" to="https://miklekuzichev.github.io/how-to-learn/index.html">Статичный сайт
              <p className="student__portfolio-arrow">&#8599;</p>
            </Link>
        </li>
        <li className="student__portfolio-link">
            <Link className="student__portfolio-title" target="_blank" rel="noreferrer" to="https://miklekuzichev.github.io/russian-travel/index.html">Адаптивный сайт
              <p className="student__portfolio-arrow">&#8599;</p>
            </Link>
        </li>
        <li className="student__portfolio-link">
            <Link className="student__portfolio-title" target="_blank" rel="noreferrer" to="https://miklekuzichev.github.io/mesto-react/">Одностраничное приложение
              <p className="student__portfolio-arrow">&#8599;</p>
            </Link>
        </li>
    </ul>
  )
}

export default Portfolio;
