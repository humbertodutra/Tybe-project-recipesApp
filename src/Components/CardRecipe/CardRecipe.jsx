import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import shareIcon from '../../images/shareIcon.svg';
import styles from './card-recipe.module.css';

const copy = require('clipboard-copy');

export default function CardRecipe({
  id, image, name, doneDate, tagName, type, category, alcoholicOrNot, index, nationality,
  history,
}) {
  const [linkIsCopied, setLinkIsCopied] = useState(false);
  return (
    <section className={ styles.section }>
      <button
        className={ styles.buttonCard }
        type="button"
        onClick={ () => history.push(`/${type}s/${id}`) }
        onKeyDown={ () => history.push(`/${type}s/${id}`) }
      >
        <img
          src={ image }
          width="50%"
          alt="Imagem da receita"
          data-testid={ `${index}-horizontal-image` }
        />
        {type === 'food' ? (
          <span data-testid={ `${index}-horizontal-top-text` }>
            {`${nationality} - ${category}`}
          </span>
        ) : (
          <span data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</span>
        )}
        <button
          type="button"
          onClick={ () => {
            copy(`http://localhost:3000/foods/${id}`);
            setLinkIsCopied(true);
          } }
        >
          {linkIsCopied ? (
            <p>Link copied!</p>
          ) : (
            <img
              src={ shareIcon }
              alt="Ícone de compartilhamento"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          )}
        </button>
        <button
          type="button"
          data-testid={ `${index}-horizontal-name` }
          onClick={ () => history.push(`/${type}s/${id}`) }
        >
          {name}
        </button>
        <p data-testid={ `${index}-horizontal-done-date` }>{`Done in: ${doneDate}`}</p>
        {tagName && tagName.map((tag) => (
          <button
            key={ uniqid() }
            type="button"
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            {tag}
          </button>
        ))}
      </button>
    </section>
  );
}

CardRecipe.propTypes = {
  id: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  tagName: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  history: PropTypes.shape().isRequired,
};
