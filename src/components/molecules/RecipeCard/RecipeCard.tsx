import React from 'react';
import Card from '../../atoms/Card';
import RecipeCardCTA from './RecipeCardCTA';

interface Recipe {
  allowMultiple?: boolean;
  isSoldOut?: boolean;
  quantity?: number;
}
export interface RecipeCardProps {
  recipe: Recipe;
};
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const variant = recipe.allowMultiple ? 'multiple' : undefined;
  return (
    <Card>
      <img src="https://m3placement.com/wp-content/uploads/2021/03/image-placeholder-350x350-1.png" alt="recipe" width="100%" />
      <RecipeCardCTA
        numSelected={recipe.quantity || 0}
        variant={variant}
        isSoldOut={recipe.isSoldOut}
      />          
    </Card>
  );
};
export default RecipeCard;