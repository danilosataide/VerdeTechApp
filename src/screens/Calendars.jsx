import React, { useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { FlatList, SafeAreaView, ScrollView, StatusBar, View, Text, StyleSheet } from "react-native";
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import * as Location from 'expo-location';
import api, { key } from '../services/api';
import appProxy from '../services/app';

import Menu from "../components/Menu";
import Conditions from "../components/Conditions";
import Header from "../components/Header";
import Forcast from "../components/Forcast";
import axios from 'axios';

function Calendars ({ navigation: { navigate }}) {

  
const getCurrentDate=()=>{
 
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return year + '-' + month + '-' + date;//format: d-m-y;
}

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';

const forecast = [
  {
    "date": "24/05",
    "weekday": "Sex",
    "max": 30,
    "min": 15,
    "cloudiness": 1.0,
    "rain": 0.19,
    "rain_probability": 20,
    "wind_speedy": "7.32 km/h",
    "description": "Chuvas esparsas",
    "condition": "rain"
  },
  {
    "date": "25/05",
    "weekday": "Sáb",
    "max": 18,
    "min": 13,
    "cloudiness": 100.0,
    "rain": 1.05,
    "rain_probability": 100,
    "wind_speedy": "6.26 km/h",
    "description": "Chuvas esparsas",
    "condition": "rain"
  },
  {
    "date": "26/05",
    "weekday": "Dom",
    "max": 16,
    "min": 13,
    "cloudiness": 100.0,
    "rain": 5.48,
    "rain_probability": 100,
    "wind_speedy": "5.19 km/h",
    "description": "Chuva",
    "condition": "rain"
  },
  {
    "date": "27/05",
    "weekday": "Seg",
    "max": 24,
    "min": 15,
    "cloudiness": 92.0,
    "rain": 10.85,
    "rain_probability": 100,
    "wind_speedy": "4.33 km/h",
    "description": "Chuva",
    "condition": "rain"
  },
  {
    "date": "28/05",
    "weekday": "Ter",
    "max": 19,
    "min": 14,
    "cloudiness": 100.0,
    "rain": 2.78,
    "rain_probability": 100,
    "wind_speedy": "4.28 km/h",
    "description": "Chuvas esparsas",
    "condition": "rain"
  },
  {
    "date": "29/05",
    "weekday": "Qua",
    "max": 21,
    "min": 11,
    "cloudiness": 0.0,
    "rain": 0.0,
    "rain_probability": 0,
    "wind_speedy": "4.26 km/h",
    "description": "Tempo limpo",
    "condition": "clear_day"
  },
  {
    "date": "30/05",
    "weekday": "Qui",
    "max": 22,
    "min": 11,
    "cloudiness": 41.0,
    "rain": 0.0,
    "rain_probability": 0,
    "wind_speedy": "4 km/h",
    "description": "Parcialmente nublado",
    "condition": "cloud"
  },
  {
    "date": "31/05",
    "weekday": "Sex",
    "max": 22,
    "min": 11,
    "cloudiness": 0.0,
    "rain": 0.0,
    "rain_probability": 0,
    "wind_speedy": "3.1 km/h",
    "description": "Tempo limpo",
    "condition": "clear_day"
  },
  {
    "date": "01/06",
    "weekday": "Sáb",
    "max": 22,
    "min": 12,
    "cloudiness": 0.0,
    "rain": 0.0,
    "rain_probability": 0,
    "wind_speedy": "5.58 km/h",
    "description": "Tempo limpo",
    "condition": "clear_day"
  },
  {
    "date": "02/06",
    "weekday": "Dom",
    "max": 25,
    "min": 13,
    "cloudiness": 29.0,
    "rain": 0.0,
    "rain_probability": 0,
    "wind_speedy": "3.27 km/h",
    "description": "Parcialmente nublado",
    "condition": "cloud"
  }
]

const [errorMsg, setErrorMsg] = useState("");
const [loading, setLoading] = useState(true);
const [weather, setWeather] = useState([]);
const [icon, setIcon] = useState({ name: 'cloud', color: '#FFF' });
const [background, setBackground] = useState(['#1ed6ff', '#97c1ff'])

// useEffect( () =>{

//   (async () =>{
//     let { status } = await Location.requestBackgroundPermissionsAsync(); // solicita a permissao
    
//     if(status !== 'granted'){
//       setErrorMsg('Permissão negada para acessar a localização');
//       setLoading(false);
//       return;
//     } 

//     let location = await Location.getCurrentPositionAsync({}); 
//     // console.log(location.coords.latitude);

//     //weather?key=092b3c2b&lat=-23.682&lon=-46.875
//     const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
//    // console.log(response.data);

//     setWeather(response.data);

//     if(response.data.results.currently === 'noite'){
//       setBackground(['#0c3741', '#0f2f61']);
//     }

//     switch(response.data.condition_slug){
//       case 'clear_day':
//           setIcon({ name: 'partly-sunny', color: '#FFB300' });
//           break;
//       case 'rain':
//         setIcon({ name: 'rainy', color: '#FFF' });
//         break;
//       case 'storm':
//         setIcon({ name: 'rainy', color: '#FFF' });
//         break;
//     }

//     setLoading(false);

//   })();

// }, []);  

// useEffect(() => {
//   (async () =>{
//     let { status } = await Location.requestBackgroundPermissionsAsync();
//     if (status !== 'granted') {
//         setErrorMsg('Permissão negada para acessar a loca lização');
//         setLoading(false);
//         return;
//     } else {
//       console.log('Permissão aceita para acessar a localização')
//     }
//     console.log('Permissão aceita para acessar a localização')
//     let location = await Location.getCurrentPositionAsync({});
//     // const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
//     // console.log(response)
//     // setWeather(JSON.stringify(response.data));

//     // const response = await fetch(`https://api.hgbrasil.com/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`, {mode:'cors'});
//     // const data = await response.json();
//     // console.log({ data })
//     // setWeather(JSON.stringify(response.data));

//     try {
//       const response = await axios.get('https://api.hgbrasil.com/weather', {
//         headers: {
//           'Authorization': `Bearer ${key}`,
//           'Content-Type': `application/json`
//         },  
//         params: {
//             key: '092b3c2b',
//             lat: location.coords.latitude,
//             lon: location.coords.longitude
//         }
//       });

//       setWeatherData(response.data);

//       if (response.data.results.currently === 'noite') {
//           setBackground(['#0c3741', '#0f2f61']);
//       }

//       switch (response.data.condition_slug) {
//           case 'clear_day':
//               setIcon({ name: 'partly-sunny', color: '#FFB300' });
//               break;
//           case 'rain':
//           case 'storm':
//               setIcon({ name: 'rainy', color: '#FFF' });
//               break;
//       }
//     } catch (err) {
//         setErrorMsg(err.message);
//     } finally {
//         setLoading(false);
//     }
//   })

//   }, []);

  return (
    <View style={styles.container}>
    <Animatable.View animation="fadeInUp" delay={500} style={styles.containerHeader}>
      <Text style={styles.message}>Verde Tech</Text>
    </Animatable.View>

    <Animatable.View animation="fadeInUp" style={styles.containerForm}>


      <ScrollView style={styles.containerSafeArea}>
        <View style={styles.content}>
          <Text style={styles.title}>Calendário</Text>
          <Calendar style={{ borderRadius: 10, elevation: 4, margin: 40}} 
            // Initially visible month. Default = now
            initialDate={getCurrentDate()}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // minDate={'2012-05-10'}
            // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            // maxDate={'2012-05-30'}
            // Handler which gets executed on day press. Default = undefined
              // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={false}
            // Replace default month and year title with custom one. the function receive a date as parameter
            renderHeader={date => {
              /*Return JSX*/
            }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            onDayPress={day => {
              console.log('selected day', day);
            }}
            markedDates={{
              '2024-05-16': {selected: true, marked: true, selectedColor: '#4F6F46'},
              '2024-05-20': {marked: true},
              '2024-06-01': {marked: true, dotColor: '#fff', selectedColor: '#4F6F46', activeOpacity: 0},
              '2024-06-03': {marked: true, dotColor: '#4F6F46', activeOpacity: 0},
              '2024-06-06': {disabled: true, disableTouchEvent: true}
            }}
          
          />

          <Text style={styles.title}>Clima</Text>
        
          {/* <Header background={background} weather={weather} icon={icon} /> */}

          {/* <Conditions weather={weather} />

          <ForecastList /> */}

        </View>
      </ScrollView>
      
    </Animatable.View>

  
</View>
  );
};

function ForecastList({ weatherData }) {
  if (weatherData.results && weatherData.results.forecast) {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={weatherData.results.forecast}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    );
  } else {
    // Opcionalmente, retorne um indicador de carregamento ou null se os dados ainda não estiverem disponíveis
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: 'italic' }}>Carregando previsão....</Text>
      </View>
      )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4F6F46',
    },
    containerWeather:{
      textAlign: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#e8f0ff',
      paddingBottom: 80
      // paddingTop: '5%',
    },
    list: {
        marginTop: 10,
        marginLeft: 10,
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
        marginBottom: 10,
        paddingBottom: 50,
      },
    
      content: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        marginTop: 5,
        // display: 'flex',
        alignContent:"center",
        textAlign: "auto",
        marginBottom: 80
      },
      title: {
        backgroundColor: 'transparent',
        fontSize: 18,
        width: '80%',
        color: '#4F6F46',
        fontWeight: 'bold',
      },
});

export default Calendars;
