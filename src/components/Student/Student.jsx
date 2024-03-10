import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import FotoStudent from '../../images/Student/IMG_2184cut.JPG';

function Student() {

  const STUDENT_TITLE = 'Студент';
  const PORTFOLIO_TITLE = 'Портфолио';

  return (
    <section className="student">
        <div className="student__container">
            <h2 className="student__head-title">{STUDENT_TITLE}</h2>
        <div className="student__info-container">
        <div className="student__info">
            <h2 className="student__title">Михаил</h2>
            <h3 className="student__subtitle">Фронтенд-разработчик, 30 лет</h3>
            <p className="student__text">Я родился и живу в Санкт-Петербурге, закончил СПБГЭТУ ЛЭТИ по специальности “Инфокоммуникационные технологии и системы связи”. Я люблю слушать музыку, а ещё увлекаюсь бегом. С 2016 года работаю в компании «НИИ Вектор» программистом FPGA. После поступления на курс веб-разработчик от Яндекс.Практикума параллельно разработал сайт интернет магазина запчастей, который успешно функционирует на данный момент. В этом году поступил в магистратуру НИТУ МИСИС на факультет компьютерных наук на специальность “Вэб разработчик”.</p>
            <Link className="student__link" target='_blank' rel="noreferrer" to="https://github.com/miklekuzichev">Github</Link>
        </div>
            <img src={FotoStudent} alt="Фотография кандидата" className="student__foto"/>
        </div>
        <h4 className="student__portfolio">{PORTFOLIO_TITLE}</h4>
            <Portfolio/>
        </div>
    </section>
  )
}

export default Student;
