import React from 'react';

function Portfolio() {

  return (
    <div className="student__portfolio_links">
        <div className="student__portfolio_link student__portfolio_link_border">
            <h3 className="student__portfolio_title">Статичный сайт</h3>
            <a href="https://miklekuzichev.github.io/how-to-learn/index.html" target='_blank' rel="noreferrer" className="student__portfolio_arrow"> </a>
        </div>
        <div className="student__portfolio_link student__portfolio_link_border">
            <h3 className="student__portfolio_title">Адаптивный сайт</h3>
            <a href="https://miklekuzichev.github.io/russian-travel/index.html" target='_blank' rel="noreferrer" className="student__portfolio_arrow"> </a>
        </div>
        <div className="student__portfolio_link">
            <h3 className="student__portfolio_title">Одностраничное приложение</h3>
            <a href="https://miklekuzichev.github.io/mesto-react/" target='_blank' rel="noreferrer" className="student__portfolio_arrow"> </a>
        </div>
    </div>
  )
}

export default Portfolio;
