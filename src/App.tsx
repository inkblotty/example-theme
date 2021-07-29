import { Global, ThemeProvider } from '@emotion/react';
import RecipeCard from './components/molecules/RecipeCard';
import theme from './theme';
import { generateFontFaces } from './theme/helpers/generateFontFaces';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={generateFontFaces(theme.typography)}/>

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
