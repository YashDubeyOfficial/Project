import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState, useRef, useCallback} from 'react';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ColorPicker from './ColorPicker';
import {useSharedValue} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const EditPhoto = (props,{navigation}) => {
// console.log(props.navigation)
  const COLORS = [
    '#FFFFFF',
    '#FF7A00',
    '#F7FC00',
    '#F5FA00',
    '#FF0000',
    '#4FF800',
    '#00A2FD',
    '#7000FF',
    '#000000',
  ];
  const [currentColor, setCurrentColor] = useState('');
  const [thickness, setThickness] = useState(5);
  const [message, setMessage] = useState('');
  const [IMGDATA, setIMGDATA] = useState(props.route.params.ImgUri);

  console.log('ImgUri===>>',  IMGDATA);
  const imgCanvas = useRef(SketchCanvas);
  const pickedColor = useSharedValue(COLORS[0]);

  const onColorChanged = useCallback(color => {
    'worklet';
    // console.log('color',color)
    setCurrentColor(color);
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* HEADER SECTION  */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => {
            props.navigation.goBack()
          }}
        >
          <Image source={require('../../../../assets/crossBlue.png')} />
        </TouchableOpacity>
        <View style={styles.sideBtn}>

          <TouchableOpacity
            style={styles.undoBtn}
            onPress={() => {
              imgCanvas.current.undo();
              // console.log('undo');
            }}>
            <Image source={require('../../../../assets/undoArrow.png')} />
          </TouchableOpacity>

          <View style={styles.editPen}>
            <Image
              style={{
                // zIndex: 2,
                backgroundColor: '#fff',
              }}
              source={require('../../../../assets/editPen.png')}
            />
          </View>

        </View>
      </View>

      <SketchCanvas
        localSourceImage={{
          filename: IMGDATA,
          directory: SketchCanvas.MAIN_BUNDLE,
          mode: 'AspectFill',
        }}
        ref={imgCanvas}
        style={{flex: 1}}
        // strokeColor={currentColor}
        strokeColor={'#a34def'}
        strokeWidth={thickness}
        onPathsChange={pathsCount => {
          console.log('pathsCount', pathsCount);
        }}
        onSketchSaved={(success, path) => {
          // console.log(success, path);
          // Alert.alert(success ? 'Image saved!' : 'Failed to save image!', path);
        }}
      />

      <View style={styles.colorPicker}>
        <ColorPicker onColorChanged={onColorChanged} />
      </View>

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => {
          imgCanvas.current.save(
            'jpg',
            false,
            'ConstructAI',
            String(Math.ceil(Math.random() * 100000000)),
            true,
            true,
            true,
          );
          props.navigation.navigate('Images');
        }}>
        <Image source={require('../../../../assets/downloadWhite.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    // borderWidth: 3,
    flexDirection: 'row',
    zIndex: 1,
    top: 10,
    position: 'absolute',
    justifyContent:'space-between',
  },
  closeBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0, .9)',
    shadowOffset: {height: 12, width: 12},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 9,
    marginLeft: 10,
    marginRight: 250,
    zIndex: 12,
  },
  sideBtn: {
    flexDirection: 'row',
    // borderWidth: 3,
    marginLeft: 25,
  },
  undoBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .9)',
    shadowOffset: {height: 12, width: 12},
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: '#fff',
    elevation: 9,
    marginRight: 10,
    // zIndex: 2,
  },
  editPen: {
    height: 37,
    width: 37,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0, .9)', // IOS
    shadowOffset: {height: 12, width: 12}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 9, // Android,
  },
  colorPicker: {
    position: 'absolute',
    left: SCREEN_WIDTH -135,
    bottom: SCREEN_HEIGHT - 160,
    transform: [{rotate: '90deg'}],
  },
  saveBtn: {
    height: 68,
    width: 68,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2994FF',
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
});
