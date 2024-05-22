import React,{useState} from "react";
import { FlatList, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Image } from 'expo-image';

const DATA = [
  {
    id: '01',
    title: 'Cebolinha',
    imageUrl: "https://ekkogreen.com.br/wp-content/uploads/2021/03/cebolinha_04.jpeg"
  },
  {
    id: '02',
    title: 'Alecrim',
    imageUrl: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2023/09/Significado-da-Flor-de-Alecrim-810x456.png'
  },
  {
    id: '03',
    title: 'Tomilho',
    imageUrl: 'https://www.jardimdasideias.com.br/wp-content/uploads/2017/01/plantas-tomilho-dicas-418x315.jpg'
  },
  {
    id: '04',
    title: 'Salsinha',
    imageUrl: 'https://static.tuasaude.com/media/article/s5/6v/salsa_4947_l.jpg'
  },
  {
    id: '04',
    title: 'Hortelã',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TziIRx21G0PYl5lBM3YCfoN6DaDaZl2c1L5xA39vJQ&s'
  },
  {
    id: '05',
    title: 'Sálvia',
    imageUrl: 'https://agronfoodacademy.com/wp-content/uploads/2022/12/Salvia.png'
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity key={item.title} onPress={onPress} style={[styles.item, {backgroundColor}]}>
    {/* <Image
      source={{ uri: item.imageUrl }}
      style={[styles.image, {height: '100%',width: '100%'}]}
    /> */}
    <Image
      source={{ uri: item.imageUrl }}
      style={[styles.image, {height: '100%',width: '100%'}]}
    />
    <Text style={[styles.titleItem, {color: textColor}]}>{item.title}</Text>

  </TouchableOpacity>
);


const Home = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const color = item.id === selectedId ? 'white' : 'white';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() =>
          // setSelectedId(item.id)
          navigation.navigate('Details', {itemSelected: item})
        }
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Verde Tech</Text>
          {/* <Animatable.Image  source={LogoFacens} 
            style={styles.imageSecondary} resizeMode="contain"
          /> */}
        </Animatable.View>
  
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>


          <SafeAreaView style={styles.containerSafeArea}>
            <Text style={styles.content}>
              <Text style={styles.title}>Guia de Plantio</Text>
              {/* <Text style={styles.separator}><View style={styles.separator}/></Text> */}
            </Text>

            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={selectedId}
            />
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
  item: {
    backgroundColor: 'transparent',
    marginVertical: 15,
    paddingBottom: 0,
    height: 80,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  titleItem: {
    backgroundColor: '#4F6F46',
    // justifyContent: 'flex-end',
    textAlign: 'left',
    marginStart: 80,
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    position: 'relative',
    overflow: "hidden",
    padding: 3,
    bottom: 0,
    marginTop: 'auto'
  },
  image:{
    position: 'absolute',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 0,
    left: 0,
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
  separator: {
    height: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F6F46'
  }
});

export default Home;
