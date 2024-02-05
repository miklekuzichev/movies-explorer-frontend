import React from 'react';

function Portfolio() {

  return (
    <ul className="student__portfolio-links">
        <li className="student__portfolio-link student__portfolio-link-border">
            <h3 className="student__portfolio-title">Статичный сайт</h3>
            <a href="https://miklekuzichev.github.io/how-to-learn/index.html" target='_blank' rel="noreferrer" className="student__portfolio-arrow"> </a>
        </li>
        <li className="student__portfolio-link student__portfolio-link-border">
            <h3 className="student__portfolio-title">Адаптивный сайт</h3>
            <a href="https://miklekuzichev.github.io/russian-travel/index.html" target='_blank' rel="noreferrer" className="student__portfolio-arrow"> </a>
        </li>
        <li className="student__portfolio-link">
            <h3 className="student__portfolio-title">Одностраничное приложение</h3>
            <a href="https://miklekuzichev.github.io/mesto-react/" target='_blank' rel="noreferrer" className="student__portfolio-arrow"> </a>
        </li>
    </ul>
  )
}

export default Portfolio;
