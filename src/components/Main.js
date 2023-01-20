import Cat from './Cat';
import React from 'react';
import { initionalCats } from '../utils/initionalCats';
export default function Main() {
  return (
    <main className="content">
      <section className="cats">
        <h2 className="cats__title"> Ты сегодня покормил кота?</h2>
        <ul className="cards">
          {initionalCats.map((cat) => {
            return (
              <Cat
                key={cat.catsId}
                catsTitle={cat.catsTitle}
                catsSubtitle={cat.catsSubtitle}
                catsOvalText={cat.catsOvalText}
                catsDescription={cat.catsDescription}
                id={cat.catsId}
              ></Cat>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
