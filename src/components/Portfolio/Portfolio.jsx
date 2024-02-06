import React from 'react';

function Portfolio() {

  return (
    <ul className="student__portfolio-links">
        <li className="student__portfolio-link">
            <a href="https://miklekuzichev.github.io/how-to-learn/index.html" target='_blank' rel="noreferrer" className="student__portfolio-title">Статичный сайт
              <p className="student__portfolio-arrow">&#8599;</p>
            </a>
        </li>
        <li className="student__portfolio-link">
            <a href="https://miklekuzichev.github.io/russian-travel/index.html" target='_blank' rel="noreferrer" className="student__portfolio-title">Адаптивный сайт
              <p className="student__portfolio-arrow">&#8599;</p>
            </a>
        </li>
        <li className="student__portfolio-link">
            <a href="https://miklekuzichev.github.io/mesto-react/" target='_blank' rel="noreferrer" className="student__portfolio-title">Одностраничное приложение
              <p className="student__portfolio-arrow">&#8599;</p>
            </a>
        </li>
    </ul>
  )
}

export default Portfolio;
