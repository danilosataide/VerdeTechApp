import React,{useState} from "react";
import { FlatList, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';



const Details = ({ route }) => {
  
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Verde Tech</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>


        <SafeAreaView style={styles.containerSafeArea}>
          <Text style={styles.content}>
            <Text style={styles.title}>{route.params.itemSelected.title}</Text>
            {/* <Text style={styles.separator}><View style={styles.separator}/></Text> */}
          </Text>
        </SafeAreaView>
        
        </Animatable.View>

      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#4F6F46',
  },
  containerSafeArea: {
  flex: 1,
  marginHorizontal: 20,
  marginTop: StatusBar.currentHeight || 0,
  },
  containerHeader: {
      marginTop: '3%',
      textAlign: 'center',
      alignItems: 'center',
      marginBottom: '3%',
      paddingStart: 0,
    },
    message: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFF',
    },
    containerForm: {
      backgroundColor: 'white',
      flex: 1,
      // borderTopLeftRadius: 40,
      // borderTopRightRadius: 40,
      paddingTop: 28,
    },
  
    content: {
      width: '100%',
      height: 'auto',
      backgroundColor: 'transparent',
      alignSelf: 'center',
      marginTop: 5,
      display: 'flex',
      alignContent:"center",
      textAlign: "auto"
    },
    title: {
      backgroundColor: 'transparent',
      fontSize: 18,
      width: '80%',
      color: '#4F6F46',
      fontWeight: 'bold',
    },
});

export default Details;
