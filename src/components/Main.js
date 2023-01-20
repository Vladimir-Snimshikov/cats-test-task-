import Cat from './Cat';
import React from 'react';
export default function Main() {
  return (
    <main className="content">
      <section className="cats">
        <h2 className="cats__title"> Ты сегодня покормил кота?</h2>
        <ul className="cards">
          <Cat
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
