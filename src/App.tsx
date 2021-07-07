import { ThemeProvider } from '@emotion/react';
import RecipeCard from './components/molecules/RecipeCard';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', gap: 12 }}>

        <RecipeCard
          recipe={{
            allowMultiple: true,
            quantity: 4,
          }}
        />

        <RecipeCard
          recipe={{
            isSoldOut: true,
          }}
        />
        
        <RecipeCard
          recipe={{}}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
