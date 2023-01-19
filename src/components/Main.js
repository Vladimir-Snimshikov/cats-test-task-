import { useEffect, useState } from 'react';
import Cat from './Cat';
import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Main() {
  const [isActive, setIsActive] = useState({
    1: 'pending',
    2: 'pending',
    3: 'pending',
  });
  const [catsText, setCatsText] = useState('Cказочное заморское яство');

  function cardClick(id) {
    if (isActive[id] === 'active') {
      setIsActive({ ...isActive, [id]: 'pending' });
    }
    if (isActive[id] === 'pending') {
      setIsActive({ ...isActive, [id]: 'active' });
    }
  }

  return (
    <main className="content">
      <section className="cats">
        <h2 className="cats__title"> Ты сегодня покормил кота?</h2>
        <ul className="cards">
          <Cat
            click={cardClick}
            isActive={isActive}
            catsText={catsText}
            catsTitle="Нямушка"
            catsSubtitle="с курой"
            catsOvalText="0,5"
            catsDescription="Чего сидишь? Порадуй котэ"
            id={1}
          >
            <p className="cards__description">
              <span>10</span>порций
            </p>
            <p className="cards__description">мышь в подарок</p>
          </Cat>
          <Cat
            click={cardClick}
            isActive={isActive}
            catsText={catsText}
            catsTitle="Нямушка"
            catsSubtitle="с курой"
            catsOvalText="2"
            catsDescription="Чего сидишь? Порадуй котэ"
            id={2}
          >
            <p className="cards__description">
              <span>40</span>порций
            </p>

            <p className="cards__description">
              <span>2</span>мыши в подарок
            </p>
          </Cat>
          <Cat
            click={cardClick}
            isActive={isActive}
            catsText={catsText}
            catsTitle="Нямушка"
            catsSubtitle="с курой"
            catsOvalText="5"
            catsDescription="Чего сидишь? Порадуй котэ"
            id={3}
          >
            <p className="cards__description">
              <span>100</span>порций
            </p>

            <p className="cards__description">
              <span>5</span>мышей в подарок
            </p>
            <p className="cards__description">заказчик доволен</p>
          </Cat>
        </ul>
      </section>
    </main>
  );
}
