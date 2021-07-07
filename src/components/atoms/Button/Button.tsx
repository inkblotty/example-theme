import { CSSObject } from '@emotion/react';
import React, { HTMLAttributes } from 'react';
import buttonStyles from './Button.styles';



type ButtonVariant = 'primary' | 'secondary' | 'minimal' | 'link';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  styles?: CSSObject;
  variant?: ButtonVariant;
};
const Button: React.FC<ButtonProps> = ({
  children,
  styles,
  variant = 'primary',
}) => {
  return (
    <button css={[buttonStyles[variant], styles]}>
      {children}
    </button>
  );
};
export default Button;