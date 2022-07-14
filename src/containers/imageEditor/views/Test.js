import {StyleSheet, Text, View, Image, ImageBackground,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import RNSketchCanvas, {
  SketchCanvas,
} from '@terrylinla/react-native-sketch-canvas';

const Test = (props) => {

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ImageBackground
          source={require('../../../../assets/editScreen1.png')}
          style={{height: '100%', flex: 1}}>
          <RNSketchCanvas
            localSourceImage={{
              filename: 'IMG_20220705_111249.jpg', // e.g. 'image.png' or '/storage/sdcard0/Pictures/image.png'
              directory: '/storage/emulated/0/Pictures/', // e.g. SketchCanvas.MAIN_BUNDLE or '/storage/sdcard0/Pictures/'
              mode: 'AspectFill',
            }}
            containerStyle={{flex: 1}}
            canvasStyle={{backgroundColor: 'transparent', flex: 1}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            closeComponent={
              <TouchableOpacity
              onPress={() => props.clsEditor(false)}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}>
                <Image source={require('../../../../assets/crossBlue.png')} />
              </TouchableOpacity>
            }
            undoComponent={
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  marginVertical: 10,
                }}>
                <Image source={require('../../../../assets/undoArrow.png')} />
              </View>
            }
            // clearComponent={
            //   <View style={styles.functionButton}>
            //     <Text style={{color: 'white'}}>Clear</Text>
            //   </View>
            // }
            // eraseComponent={
            //   <View style={styles.functionButton}>
            //     <Text style={{color: 'white'}}>Eraser</Text>
            //   </View>
            // }
            // strokeComponent={color => (
            //   <View
            //     style={[{backgroundColor: 'red'}, styles.strokeColorButton]}
            //   />
            // )}
            // strokeSelectedComponent={(color, index, changed) => {
            //   return (
            //     <View
            //       style={[
            //         {backgroundColor: color, borderWidth: 2},
            //         styles.strokeColorButton,
            //       ]}
            //     />
            //   );
            // }}
            // strokeWidthComponent={w => {
            //   return (
            //     <View style={styles.strokeWidthButton}>
            //       <View
            //         style={{
            //           backgroundColor: 'white',
            //           marginHorizontal: 2.5,
            //           width: Math.sqrt(w / 3) * 10,
            //           height: Math.sqrt(w / 3) * 10,
            //           borderRadius: (Math.sqrt(w / 3) * 10) / 2,
            //         }}
            //       />
            //     </View>
            //   );
            // }}
            saveComponent={
              <TouchableOpacity
                onPress={()=> {props.navigation.navigate('Images'),props.closeBtn(false)}}
                style={{
                  backgroundColor: '#2994FF',
                  borderRadius: 40,
                  width: 68,
                  height: 68,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginHorizontal: 5,
                  // marginVertical:10,
                  // position:'absolute',
                  // borderWidth:10,
                  top:0,
                  left:0,
                  right:0,
                  bottom:0
                }}>
                <Image source={require('../../../../assets/downloadWhite.png')} />
              </TouchableOpacity>
            }
            savePreference={() => {
              return {
                folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 10)),
                transparent: false,
                imageType: 'png',
                includeImage: true,
                includeText: false,
                cropToImageSize: true,
              };
            }}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    backgroundColor: '#39579A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
