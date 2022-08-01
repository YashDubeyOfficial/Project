import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importing Screens
import AddPhotos from '../containers/imageEditor/views/AddPhotos';
import TakePhoto from '../containers/imageEditor/views/TakePhoto';
import imageEditor from '../containers/imageEditor/views/imageEditor';
import Images from '../containers/imageEditor/views/Images';
import CustomCamRoll from '../containers/imageEditor/views/CustomCamRoll';
import EditPhoto from '../containers/imageEditor/views/editPhoto';
import Test from '../containers/imageEditor/views/Test';
import ColorPickers from '../containers/imageEditor/views/ColorPicker';

const Stack = createNativeStackNavigator();

const StackNavigation = ({navigation}) => {
  return (
    <Stack.Navigator>
     <Stack.Screen
        name="Images"
        component={Images}
        options={{
          headerShown: false,
        }}
      />
    {/* <Stack.Screen
      name="Test"
      component={Test}
      options={{
        headerShown: false,
      }}
    /> */}
      <Stack.Screen
        name="imageEditor"
        component={imageEditor}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddPhotos"
        component={AddPhotos}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TakePhoto"
        component={TakePhoto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditPhoto"
        component={EditPhoto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CustomCamRoll"
        component={CustomCamRoll}
        options={{
          headerShown: false,
        }}
      />
       
    </Stack.Navigator>
  );
};

export default StackNavigation;
