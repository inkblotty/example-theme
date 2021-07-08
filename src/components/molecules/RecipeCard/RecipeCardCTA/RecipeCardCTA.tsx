import React from 'react';
import Button from '../../../atoms/Button';
import styles from './RecipeCardCTA.styles';

export interface RecipeCardCTAProps {
  isSoldOut?: boolean;
  numSelected?: number;
  variant?: 'multiple' | 'extra';
};
const WrapperDiv: React.FC = ({ children }) => (
  <div css={styles.wrapperDiv}>
    {children}
  </div>
);
const RecipeCardCTA: React.FC<RecipeCardCTAProps> = ({ isSoldOut, numSelected, variant }) => {
  if (isSoldOut) {
    return (
      <WrapperDiv>
        <Button variant="minimal" css={styles.soldOutButton}>Sold Out</Button>
      </WrapperDiv>
    );
  }

  if (variant === 'multiple') {
    return (
      <WrapperDiv>
        <div css={styles.multipleWrapper}>
          <Button variant="minimal" aria-label="remove one" css={styles.plusMinusButton}>-</Button>
          {numSelected || 0} Servings
          <Button variant="minimal" aria-label="add one" css={styles.plusMinusButton}>+</Button>
        </div>
      </WrapperDiv>
    );
  }

  if (variant === 'extra') {
    return (
      <WrapperDiv>
        <Button variant="secondary" css={styles.wrapper}>Add Extra Meal</Button>
      </WrapperDiv>
    );
  }

  return (
    <WrapperDiv>
      <Button variant="secondary" css={styles.wrapper}>Add to Box</Button>
    </WrapperDiv>
  );
};
export default RecipeCardCTA;