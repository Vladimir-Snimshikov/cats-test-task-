import { useEffect, useState } from 'react';
import React from 'react';

export default function Cat({
  isActive,
  catsTitle,
  catsOvalText,
  catsDescription,
  catsSubtitle,
  children,
  click,
  id,
}) {
  const [cardText, setCardText] = useState('');
  const [countEats, setcountEats] = useState(2);

  useEffect(() => {
    if (isActive.status === 'active') {
      setCardText('Коте не одобряет?');
    }
    if (isActive.status === 'inActive') {
      setCardText('Cказочное заморское яство?');
    }

    if (isActive.status === 'pending') {
      setCardText('Cказочное заморское яство?');
    }
  }, [isActive]);

  function handlerClick() {
    click(id);
  }

  return (
    <li
      onClick={() => {
        handlerClick(id);
      }}
      id={id}
      className="cards__item"
    >
      <figure
        className={`cards__item-container ${
          isActive.status === 'active' ? 'cards__item-container_active' : ''
        }`}
      >
        <p className="cards__text">{cardText}</p>
        <h3 className="cards__title">{catsTitle}</h3>
        <p className="cards__subtitle">{catsSubtitle} </p>
        {children}
        <div
          className={`cards__oval ${
            isActive.status === 'active' ? 'cards__oval_active' : ''
          }`}
        >
          <p className="cards__oval-text">{catsOvalText}</p>
          <p className="cards__oval-text">кг</p>
        </div>
      </figure>
      <figcaption className="cards__description_botton">
        {catsDescription}
        <button className="cards__but">купи</button>
      </figcaption>
    </li>
  );
}
