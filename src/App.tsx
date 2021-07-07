import React from 'react';
import { ThemeProvider } from '@emotion/react';
import RecipeCard from './components/molecules/RecipeCard';
import theme from './theme';
import { jsx, css, Global, keyframes } from '@emotion/react/macro'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecipeCard />
    </ThemeProvider>
  );
}

export default App;
