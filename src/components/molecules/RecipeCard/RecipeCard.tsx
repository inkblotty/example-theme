import React from 'react';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button'

export interface RecipeCardProps {
  
};
const RecipeCard: React.FC<RecipeCardProps> = () => {
  return (
    <Card>
      <Button variant="primary"> primary </Button>
      <Button variant="secondary"> secondary </Button>
      <Button variant="link"> link </Button>
      <Button variant="minimal"> minimal </Button>           
    </Card>
  );
};
export default RecipeCard;