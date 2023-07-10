import React from 'react';
import './MoviesCardList.css'
import Cards from "../Cards/Cards";
import AddMore from "../AddMore/AddMore";

const MoviesCardList = () => {
  const [visibleCards, setVisibleCards] = React.useState(12);

  const handleShowMore = () => {
    setVisibleCards(prevVisibleCards => {
      const remainingCards = 16 - prevVisibleCards; // Вычисляем количество оставшихся карточек

      // Возвращаем либо 12, либо оставшиеся карточки
      return prevVisibleCards + Math.min(12, remainingCards);
    });
  };

  return (
    <>
      <section className="movies">
        {[...Array(visibleCards)].map((_, index) => <Cards key={index}/>)}
      </section>
      {visibleCards < 16 && <AddMore handleShowMore={handleShowMore}/>}
    </>
  );
};

export default MoviesCardList;
