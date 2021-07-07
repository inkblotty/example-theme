import { CSSObject } from '@emotion/react';
import React from 'react';
import styles from './Card.styles';

export interface CardProps {
  wrapperStyles?: CSSObject;
};
const Card: React.FC<CardProps> = ({ children, wrapperStyles }) => {
  console.log('styles', styles);
  return (
    <div css={[styles.wrapper, wrapperStyles]}>
      {children}
    </div>
  );
};
export default Card;