import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditPhoto = (props) => {
    console.log('editPhooto===>>>',props.route.params.ImgUri[0])
  return (
    <View>
      <Text style={{color:'#000'}}>{props.route.params.ImgUri}</Text>
    </View>
  )
}

export default EditPhoto

const styles = StyleSheet.create({})