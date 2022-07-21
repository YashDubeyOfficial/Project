/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
//  import { RNCamera } from 'react-native-camera';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import ColorPicker from './ColorPicker';

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: 0,
      color: '#FF0000',
      thickness: 5,
      message: '',
      photoPath: null,
      scrollEnabled: true,
      // IMGDATA: props.route.params.ImgUri,
    };
    // console.log(props.route.params);
  }
  //  takePicture = async function () {
  //    if (this.camera) {
  //      const options = { quality: 0.5, base64: true };
  //      const data = await this.camera.takePictureAsync(options)
  //      this.setState({
  //        photoPath: data.uri.replace('file://', '')
  //      })
  //    }
  //  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={styles.functionButton}
                onPress={() => {
                  this.setState({example: 0});
                }}>
                <Text style={{color: 'white'}}>Close</Text>
              </TouchableOpacity>
              <ColorPicker/>
              <TouchableOpacity
                style={styles.functionButton}
                onPress={() => {
                  this.canvas.undo();
                }}>
                <Text style={{color: 'white'}}>UNDO</Text>
              </TouchableOpacity>
            </View>
            <SketchCanvas
              localSourceImage={{
                // filename: this.state.IMGDATA,
                directory: SketchCanvas.MAIN_BUNDLE,
                mode: 'AspectFit',
              }}
              // localSourceImage={{ filename: 'bulb.png', directory: RNSketchCanvas.MAIN_BUNDLE }}
              ref={ref => (this.canvas = ref)}
              style={{flex: 1}}
              strokeColor={'#b8860b'}
              strokeWidth={this.state.thickness}
              onPathsChange={pathsCount => {
                console.log('pathsCount', pathsCount);
              }}
              onSketchSaved={(success, path) => {
                console.log(success, path);
                Alert.alert(
                  success ? 'Image saved!' : 'Failed to save image!',
                  path,
                );
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={[styles.functionButton, {backgroundColor: 'red'}]}
                  onPress={() => {
                    this.setState({color: '#FF0000'});
                  }}>
                  <Text style={{color: 'white'}}>Red</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.functionButton, {backgroundColor: 'black'}]}
                  onPress={() => {
                    this.setState({color: '#000000'});
                  }}>
                  <Text style={{color: 'white'}}>Black</Text>
                </TouchableOpacity>
              </View>
              <Text style={{marginRight: 8, fontSize: 20}}>
                {this.state.message}
              </Text>
              <TouchableOpacity
                style={[
                  styles.functionButton,
                  {backgroundColor: 'black', width: 90},
                ]}
                onPress={() => {
                  console.log(
                    'saveImg====>>>>',
                    this.canvas.save(
                      'jpg',
                      false,
                      'camera',
                      'test',
                      true,
                      false,
                      true,
                    ),
                  );
                  // console.log('getPaths====>>>>', this.canvas.getPaths());
                  // Alert.alert(JSON.stringify(this.canvas.getPaths()))
                  // this.canvas.getBase64('jpg', false, true, true,false, (err, result) => {
                  //   console.log(atob(result))
                  // })
                }}>
                <Text style={{color: 'white'}}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignSelf: 'stretch',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  page: {
    flex: 1,
    height: 300,
    elevation: 2,
    marginVertical: 8,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.75,
    shadowRadius: 2,
  },
});

AppRegistry.registerComponent('example', () => example);
