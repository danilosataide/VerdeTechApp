import React from 'react'
import { View, Text, StyleSheet, Pressable , ImageBackground, Alert } from 'react-native' 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';


import * as Animatable from 'react-native-animatable';

import LogoFacens from '../../assets/logofacens.jpeg';

import BottomTabNavigator from '../navigations/TabNavigator';

const Welcome = ({ navigation: { navigate } }) => {
  // const navigation  = useNavigation()
  const image = require('../../assets/fundo1.jpeg')
  
  const handleAcessar = () => {
    // onPress={navigation.navigate("DrawerNavigator")}
    navigate("TabNavigator")//replace or navigate
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Animatable.Image  source={LogoFacens} 
          style={styles.imageSecondary} resizeMode="contain"
        />
      <View style={styles.containerLogo}>
        {/* <Image source={{uri:'https://www.construtoraplaneta.com.br/wp-content/themes/planeta/imagens/logo.svg'}} 
            style = {{ width: "50%", height: "50%", backgroundColor: '#14750D' }} resizeMode='contain'
          /> */}
        {/* <Animatable.Image
          animation="flipInY"
          source={Logo}
          style = {{ width: "50%", height: "50%", backgroundColor: 'transparent' }} resizeMode='contain'
        /> */}
        <Animatable.View delay={500} animation="fadeInUp" style={styles.containerLogoAnimation}>
          <MaterialCommunityIcons name="shovel" size={46} color="white" />

          <Text style={styles.title}>
            VERDE TECH
          </Text>
          <Text style={styles.text}>
            Horticultura Inteligente
          </Text>
        </Animatable.View>
      </View>

          
      <Animatable.View delay={1100} animation="fadeInUp" style={styles.containerForm}>
        <View style={styles.viewContainer}>

       
        <Text style={styles.title}>
          Hora de plantar e cultivar o futuro! 
        </Text>
        <Text style={styles.text}>
          Organize seus projetos de jardinagem e acompanhe o tempo com o nosso aplicativo.
        </Text>
        </View>
        <Pressable  
          style={styles.button} 
        
          onPress={handleAcessar} 
          // onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>
            Acessar
          </Text>
          <FontAwesome style={styles.buttonIcon} name="chevron-right" size={16}/>
        </Pressable >
      </Animatable.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F6F46',
    marginBottom: 0,
  },
  image: {
    flex: 1,
  },
  imageSecondary: {
    width: 120, 
    height: 120,
    backgroundColor: 'transparent', 
    marginLeft: 25,
    
  },
  containerLogo: {
    flex: 2,
    backgroundColor: 'transparent',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingStart: 20,
    paddingEnd: 15
  },
  containerLogoAnimation:{
    flex: 1,
    backgroundColor: 'transparent',
    // paddingStart: 15,
    paddingEnd: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    color: '#fff',
    // marginBottom: 12
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  viewContainer:{
    bottom: 100
  },
  button: {
    position: 'absolute',
    backgroundColor: '#4F6F46',
    height: 50,
    borderRadius: 50,
    paddingVertical: 8,
    width: 250, 
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 30,
    paddingTop: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    paddingEnd: 5
  },
  buttonIcon: {
    color: "#fff",
    paddingStart: 5,
    alignSelf: 'center'
  }
})

export default Welcome;
