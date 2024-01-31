import React from 'react';

function Portfolio() {

  return (
    <div className="student__portfolio-links">
        <div className="student__portfolio-link student__portfolio-link_border">
            <h3 className="student__portfolio-title">Статичный сайт</h3>
            <a href="https://miklekuzichev.github.io/how-to-learn/index.html" target='_blank' rel="noreferrer" className="student__portfolio-arrow"> </a>
        </div>
        <div className="student__portfolio-link student__portfolio-link_border">
            <h3 className="student__portfolio-title">Адаптивный сайт</h3>
            <a href="https://miklekuzichev.github.io/russian-travel/index.html" target='_blank' rel="noreferrer" className="student__portfolio-arrow"> </a>
        </div>
        <div className="student__portfolio-link">
            <h3 className="student__portfolio-title">Одностраничное приложение</h3>
            <a href="https://miklekuzichev.github.io/mesto-react/" target='_blank' rel="noreferrer" className="student__portfolio-arrow"> </a>
        </div>
    </div>
  )
}

export default Portfolio;
