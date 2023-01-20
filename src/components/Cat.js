import { useEffect, useState } from 'react';
import React from 'react';

export default function Cat({
  catsTitle,
  catsOvalText,
  catsDescription,
  catsSubtitle,
  children,
  id,
}) {
  const [cardState, setCardState] = useState({
    cardId: id,
    status: 'pending',
    cardText: 'Сказачное заморское явство',
    count: 3,
  });

  const [isCont, setIscount] = useState(true);

  useEffect(() => {
    cardState.count > 0 ? setIscount(true) : setIscount(false);
  }, [cardState]);

  function handlerClickCard() {
    if (cardState.status === 'pending') {
      setCardState({ ...cardState, status: 'active' });
    }
    if (cardState.status === 'active') {
      if (cardState.cardText === 'Коте не одобряет?') {
        setCardState({
          ...cardState,
          status: 'pending',
          cardText: 'Сказачное заморское явство?',
        });
      } else {
        setCardState({ ...cardState, status: 'pending' });
      }
    }
  }

  function handlerLeaveMouse() {
    if (cardState.status === 'active') {
      setCardState({ ...cardState, cardText: 'Коте не одобряет?' });
    }
  }

  return (
    <li onMouseLeave={handlerLeaveMouse} className="cards__item">
      <figure
        onClick={handlerClickCard}
        className={`cards__item-container ${
          cardState.status === 'active' ? 'cards__item-container_active' : ''
        }`}
      >
        <div
          className={`${cardState.count < 1 ? 'cards__item-disabled' : ''}`}
        ></div>
        <p className="cards__text">{cardState.cardText}</p>
        <h3 className="cards__title">{catsTitle}</h3>
        <p className="cards__subtitle">{catsSubtitle} </p>
        {children}
        <div
          className={`cards__oval ${
            cardState.status === 'active' ? 'cards__oval_active' : ''
          }`}
        >
          <p className="cards__oval-text">{catsOvalText}</p>
          <p className="cards__oval-text">кг</p>
        </div>
      </figure>
      <figcaption
        className={`cards__figcaption-text ${
          !isCont ? 'cards__figcaption-text_in-active' : ''
        }`}
      >
        {!isCont ? `печалька, с ${catsSubtitle} закончился` : catsDescription}
        {isCont && (
          <a onClick={handlerClickCard} className="cards__but">
            {` купи`}
          </a>
        )}
      </figcaption>
    </li>
  );
}

/* cards__figcaption - text_in - active; */
