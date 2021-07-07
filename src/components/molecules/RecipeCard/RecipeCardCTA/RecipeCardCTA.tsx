import React from 'react';
import Button from '../../../atoms/Button';
import styles from './RecipeCardCTA.styles';

export interface RecipeCardCTAProps {
  isSoldOut?: boolean;
  numSelected?: number;
  variant?: 'multiple' | 'extra';
};
const RecipeCardCTA: React.FC<RecipeCardCTAProps> = ({ isSoldOut, numSelected, variant }) => {
  if (isSoldOut) {
    return <Button variant="minimal" css={styles.soldOutButton}>Sold Out</Button>
  }

  if (variant === 'multiple') {
    return (
      <div css={styles.multipleWrapper}>
        <Button variant="minimal" aria-label="remove one" css={styles.plusMinusButton}>-</Button>
        {numSelected || 0} Servings
        <Button variant="minimal" aria-label="add one" css={styles.plusMinusButton}>+</Button>
      </div>
    );
  }

  if (variant === 'extra') {
    return <Button variant="secondary" css={styles.wrapper}>Add Extra Meal</Button>
  }

  return (
    <Button variant="secondary" css={styles.wrapper}>Add to Box</Button>
  );
};
export default RecipeCardCTA;