import * as React from 'react';
import { useState } from 'react';
import { SplashScreen } from './screens'
import AppNavigation from './navigation/AppNavigation'
import { FavCharactersProvider } from './providers/favCharactersProvider';
import { FavComicsProvider } from './providers/favComicsProvider';


export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAsync = async () => {
    await Promise.all([
      // This way we can see the SplashScreen in development.
      new Promise(resolve => setTimeout(resolve, 1000))
    ]);
  }

  const handleLoadingError = (error: any) => {
    console.warn(error);
  }

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  }

  if(!isLoadingComplete) {
    return (
      <SplashScreen
        startAsync={loadResourcesAsync}
        onFinish={handleFinishLoading}
        onError={handleLoadingError}
      />
    )
  } else {
    return (
      <FavCharactersProvider>
        <FavComicsProvider>
          <AppNavigation/>
        </FavComicsProvider>
      </FavCharactersProvider>
    )
  }
}
