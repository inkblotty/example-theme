import { Interpolation, Theme } from '@emotion/react';
import React, { HTMLAttributes } from 'react';
import buttonStyles from './Button.styles';

type ButtonVariant = 'primary' | 'secondary' | 'minimal' | 'link';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  css?: Interpolation<Theme>;
  variant?: ButtonVariant;
};
const Button: React.FC<ButtonProps> = ({
  children,
  css,
  variant = 'primary',
}) => {
  return (
    <button css={[buttonStyles[variant], css]}>
      {children}
    </button>
  );
};

/**
 * pre-smooshed import could look like (pseudocode):
 * 
 *
const Button: React.FC<ButtonProps> = ({
  styles,
  children,
  css,
  variant = 'primary',
}) => {
  return (
    <button css={[styles[variant], css]}>
      {children}
    </button>
  );
};
Button.getInitialProps = (props) => {
  const { code } = useTheme();
  return {
    styles: buttonStyles[code || 'baseStyles'],
    ...props,
  }
}
 */

export default Button;