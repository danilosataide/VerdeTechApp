import React,{useState} from "react";
import { FlatList, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import Cebolinha from "../viewStatics/cebolinha";


const Details = ({ route }) => {
  
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Verde Tech</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>{route.params.itemSelected.title}</Text>
        <ScrollView style={styles.containerSafeArea}>

            {route.params.itemSelected.plantCareData.map((section, index) => (
                <View key={index}>
                    <Text style={styles.titleContent}>{section.title}</Text>
                    {/* {section.content.map((item, idx) => (
                        <Text style={styles.content} key={idx}>{item}</Text>
                    ))} */}
                    {section.content.map((item, idx) => (
                        <Text style={styles.content} key={`${index}-${idx}`}>{item}</Text>
                    ))}
                </View>
            ))}
        </ScrollView>
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
      paddingTop: 20,
      paddingBottom: 80,
    },
  
 
    content: {
      marginTop: 5,
      fontSize: 16,
      lineHeight: 24,

  },
    title: {
      backgroundColor: 'transparent',
      fontSize: 22,
      width: '100%',
      color: '#4F6F46',
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      paddingBottom: 20
    },
    titleContent: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    
});

export default Details;
