import { Global, ThemeProvider } from '@emotion/react';
import RecipeCard from './components/molecules/RecipeCard';
import getTheme from './theme';
import { generateFontFaces } from './theme/helpers/generateFontFaces';

function App() {
  // const theme = getTheme('ER');
  const theme = getTheme(); // put theme in state?
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
