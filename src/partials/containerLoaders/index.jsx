import React from "react"
import { Image, ProgressBarAndroid, ViewBase } from "react-native"
import { View, Modal } from "react-native"



export const Loading = () => {
    return (
        <View style={{
            flex : 1,
            height : 450,
            justifyContent : 'center',
            alignItems : 'center',
            }}>
            <ProgressBarAndroid style={{width : 50, height : 50}} color={'tomato'} />


        </View>
    )
}


export const ContainerLoading = () => {
  return (
      <Modal
      animationType= 'fade'
      transparent={true}
        
      style={{
        position : 'absolute',
        top : 0,
        zIndex : 100,
        backgroundColor : 'silver',
          flex : 1,
          width : '100%',
          height : '100%',
          justifyContent : 'center',
          alignItems : 'center',
          }}>
            <View style={{flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Define a cor de fundo semi-transparente
              justifyContent: 'center',
              alignItems: 'center',}}>
              <ProgressBarAndroid style={{width : 50, height : 50}} color={'white'} />
            </View>

      </Modal>
  )
}