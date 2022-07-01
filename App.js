import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
// import ImageEditor from './src/containers/imageEditor/views/imageEditor';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <ImageEditor/>
  );
};

export default App;
