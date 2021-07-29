import React, { useState, useMemo } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import RecipeCard from './components/molecules/RecipeCard';
import getTheme from './theme';
import { generateFontFaces } from './theme/helpers/generateFontFaces';

function App() {
  const [brand, setBrand] = useState(`${process.env.REACT_APP_BRAND_NAME}`);
  const theme = useMemo(() => getTheme(brand), [brand])
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
      <button onClick={() => setBrand('ER')}>EVERYPLATE</button>
      <button onClick={() => setBrand('FJ')}>FACTOR</button>
    </ThemeProvider>
  );
}

export default App;
