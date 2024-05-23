import React,{useState} from "react";
import { FlatList, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Image } from 'expo-image';

const DATA = [
  {
    id: '01',
    title: 'Cebolinha',
    imageUrl: 'require("../../assets/cebolinha.jpeg")',
    plantCareData: [
      {
          title: "Preparo do Solo",
          content: [
              "Essa planta prefere:",
              "• Solos bem drenados.",
              "• Solos férteis.",
              "• Solos ricos em matéria orgânica."
          ]
      },
      {
          title: "Profundidade do Plantio",
          content: [
              "• Plante a muda de cebolinha em uma profundidade de aproximadamente 2 a 3 cm."
          ]
      },
      {
          title: "Espaçamento",
          content: [
              "Deixe aproximadamente 15 a 20 cm entre as plantas para garantir espaço suficiente para o crescimento saudável."
          ]
      },
      {
          title: "Adubação",
          content: [
              "* Fertilize o solo antes do plantio com um adubo rico em nutrientes, como composto orgânico ou adubo balanceado."
          ]
      },
      {
          title: "Benefícios da Cebolinha para Saúde",
          content: [
              "• Ajuda na regulação do sono.",
              "• Contribui para os movimentos musculares.",
              "• Auxilia no aprendizado e na memória.",
              "• Mantém a estrutura das membranas celulares.",
              "• Facilita a transmissão de impulsos nervosos.",
              "• Auxilia na absorção de gordura.",
              "• Reduz a inflamação crônica."
          ]
      },
      {
          title: "Controle de Pragas e Doenças",
          content: [
              "• Mantenha a horta limpa para evitar pragas e doenças.",
              "• Use métodos orgânicos, como repelentes naturais ou predadores naturais, para controlar pragas.",
              "• Monitore sinais de doenças, como manchas ou murcha nas folhas, e trate-as imediatamente."
          ]
      },
      {
          title: "Luminosidade e Clima",
          content: [
              "• A cebolinha verde necessita de luz solar direta ao menos por algumas horas diariamente e cresce melhor em temperaturas indo de 13°C a 24°C."
          ]
      },
      {
          title: "Regas",
          content: [
              "• A cebolinha verde precisa de regas frequentes, para que o solo seja mantido úmido, mas sem que fique encharcado."
          ]
      }
    ]
  },
  {
    id: '02',
    title: 'Alecrim',
    imageUrl: "require('../../assets/alecrim.webp')",
    plantCareData: [
      {
          title: "Preparo do Solo",
          content: [
              "• A terra de plantio deve estar misturada à areia, pois o alecrim gosta de solos mais secos",
              "• Certifique-se de que o solo está bem drenado e enriquecido com matéria orgânica.",
          ]
      },
      {
          title: "Profundidade do Plantio",
          content: [
              "• Faça um buraco com 5 a 10 cm de profundidade."
          ]
      },
      {
          title: "Espaçamento",
          content: [
              "•	30 centímetros entre as plantas."
          ]
      },
      {
          title: "Adubação",
          content: [
              "•	Adicione uma camada de argila expandida (1-2 dedos de altura) no vaso para garantir boa drenagem",
              "•	Cubra a argila expandida com uma manta de drenagem, sem deixar buracos.",
              "•	Adicione um pouco de substrato misturado com areia.",
              "•	Coloque as mudas de alecrim, mantendo uma distância de 30 cm entre elas.",
              "•	Complete com substrato até que as mudas fiquem firmes, sem cobrir muito a parte superior do torrão."
          ]
      },
      {
          title: "Benefícios do Alecrim para Saúde",
          content: [
              "•	Antimicrobianas",
              "•	Digestivas",
              "•	Diuréticas",
              "•	Calmantes",
              "•	Anti-estressantes",
              "•	Antidepressivas",
              "•	Contém flavonoides e ácido cafeico.",
              "•	Flavonoides podem ajudar na prevenção de doenças cardiovasculares e degenerativas, como o câncer."
          ]
      },
      {
          title: "Luminosidade e Clima",
          content: [
              "•	O alecrim prefere climas temperados e tropicais.",
              "•	Evite temperaturas extremas para o plantio.",
              "•	Evite locais com excesso de umidade e muita chuva.",
              "•	O alecrim precisa de pelo menos cinco horas diárias de luz solar direta."
          ]
      },
      {
          title: "Regas",
          content: [
              "O Alecrim não precisa de regas frequentes, no máximo, duas vezes por semana com dois dias de intervalo (claro, sempre observando se essa rotina está sendo benéfica para a sua planta)."
          ]
      }

    ]
  },
  {
    id: '03',
    title: 'Tomilho',
    imageUrl: "require('../../assets/tomilho.jpg')",
    plantCareData: [
      {
          title: "Preparo do Solo",
          content: [
              "•	Mantenha o solo arenoso e bem drenado.",
              "•	Misture um pouco de areia à terra para favorecer o escoamento da água.",
              "•	Adicione calcário à terra para melhorar a drenagem."
          ]
      },
      {
          title: "Profundidade do Plantio",
          content: [
              "•	São necessários 15 cm de profundidade para plantar tomilho em vasos."
          ]
      },
      {
          title: "Adubação",
          content: [
              "•	Use adubos orgânicos, como composto ou húmus de minhoca.",
              "•	Como a planta precisa de poucos nutrientes para sobreviver, a adubação deve ser feita somente uma vez por ano."
          ]
      },
      {
          title: "Benefícios do Tomilho para Saúde",
          content: [
              "•	O tomilho é considerado um ótimo antibiótico natural",
              "•  Possui ação antibacteriana e antiespasmódica.",
              "•	Ajuda a restabelecer a flora intestinal.",
              "•	Contribui para o funcionamento normal da vesícula biliar.",
              "•	Tem uma forte ação na desintoxicação do organismo.",
          ]
      },
      {
          title: "Luminosidade e Clima",
          content: [
              "•	Nativo do Mediterrâneo, o tomilho necessita de muita luminosidade:",
              "•	Pode ficar exposto ao sol pleno.",
              "•	Necessita de pelo menos quatro horas de sol diárias.",
              "•	Prefere climas quentes, mas resiste a temperaturas amenas:",
              "•	Pode ser cultivado em locais com frio moderado, até 4ºC."
          ]
      },
      {
          title: "Regas",
          content: [
            "•	É recomendado molhá-lo apenas quando a terra estiver seca, sem encharcar o solo."
          ]
      }

    ]
  },
  {
    id: '04',
    title: 'Salsinha',
    imageUrl: "require('../../assets/salsinha.webp')",
    plantCareData: [
      {
          title: "Preparo do Solo",
          content: [
            "•	Remova todas as ervas daninhas e pedras do solo.",
            "•	Acrescente composto orgânico para enriquecer o solo e melhorar sua textura."
          ]
      },
      {
          title: "Profundidade do Plantio",
          content: [
            "•	Plante as sementes de salsinha a uma profundidade de cerca de 0,5 a 1 cm no solo."
          ]
      },
      {
        title: "Espaçamento",
        content: [
          "•	Deixe aproximadamente 15 a 20 cm entre as plantas para garantir espaço suficiente para o crescimento saudável."
        ]
    },
      {
          title: "Adubação",
          content: [
            "•	Fertilize o solo antes do plantio com um adubo rico em nutrientes, como composto orgânico ou adubo balanceado."
          ]
      },
      {
          title: "Benefícios da Salsinha para saúde:",
          content: [
            "•	Consumo de salsinha pode ajudar a regular o açúcar no sangue, protegendo o fígado em pessoas com diabetes devido à sua ação antioxidante.",
            "•	A presença de flavonoides na salsinha também pode ajudar a prevenir o surgimento da diabetes, sendo uma opção benéfica para pessoas com pré-diabetes.",
            "•	Seu consumo regular pode contribuir para a estabilidade dos níveis de glicose no sangue, oferecendo um suporte adicional para aqueles que buscam controlar a diabetes de forma natural."
          ]
      },
      {
          title: "Luminosidade e Clima",
          content: [
              "•	A cebolinha verde necessita de luz solar direta ao menos por algumas horas diariamente e cresce melhor em temperaturas indo de 13°C a 24°C."
          ]
      },
      {
          title: "Regas",
          content: [
            "•	A salsinha verde precisa de regas frequentes, para que o solo seja mantido úmido, mas sem que fique encharcado. "
          ]
      }

    ]
  },
  {
    id: '05',
    title: 'Hortelã',
    imageUrl: "require('../../assets/hortela.jpg')",
    plantCareData: [
      {
          title: "Passo inicial",
          content: [
            "•	Corte alguns galhos da planta mãe com tamanho entre cinco a oito centímetros;",
            "•	Insira os galhos no recipiente com água e retire as folhas de ficarem submersas"
          ]
      },
      {
          title: "Preparação do Solo",
          content: [
            "•	Remova todas as ervas daninhas e pedras do solo.",
            "•	Afofe o solo para melhorar a circulação de ar e a penetração das raízes."
          ]
      },
      {
          title: "Profundidade do Plantio",
          content: [
            "•	Plante as mudas de hortelã a uma profundidade de cerca de 2 a 3 centímetros."
          ]
      },
      {
        title: "Espaçamento",
        content: [
          "•	Deixe um espaçamento de aproximadamente 30 centímetros entre as mudas, para permitir o crescimento saudável das plantas."
        ]
    },
      {
          title: "Adubação",
          content: [
            "•	Antes do plantio, adicione composto orgânico ou adubo rico em nutrientes ao solo para fornecer os nutrientes necessários para o crescimento das plantas."
          ]
      },
      {
          title: "Controle de pragas e doenças:",
          content: [
            "•	Mantenha a horta limpa e livre de detritos para evitar o acúmulo de pragas e doenças.",
            "•	Se necessário, utilize métodos de controle orgânicos, como o uso de repelentes naturais ou a introdução de predadores naturais, para manter as pragas sob controle.",
            "•	Fique atento a sinais de doenças nas plantas, como manchas nas folhas ou murcha, e trate-as prontamente com métodos adequados de controle."
          ]
      },
      {
          title: "Benefícios da Hortelã para saúde:",
          content: [
            "•	Hortelã ajuda a aliviar sintomas de gripes e resfriados devido ao mentol presente na planta, que atua como um eficiente descongestionante.",
            "•	O mentol que existe na hortelã funciona como um bom expectorante, auxiliando na expulsão do muco e na redução da tosse durante doenças respiratórias.",
            "•	É eficaz no alívio de gases, cólicas, azia e refluxo, melhorando a produção de secreções digestivas e promovendo o relaxamento do intestino.",
            "•	Possui propriedades antibacterianas que combatem bactérias no trato digestivo e na boca, prevenindo halitose e infecções associadas."
          ]
      },
    ]
  },
  {
    id: '06',
    title: 'Sálvia',
    imageUrl: "require('../../assets/salvia.png')",
    plantCareData: [
      {
          title: "Preparação do solo",
          content: [
            "•  Solo ideal para sálvia tem que ser bem drenado;",
            "•	Rico em nitrogênio",
            "•	Tolerante a diferentes tipos de solo e pH; ",
            "•	Evitar solo que retenha muita água; ",
            "•	A retenção excessiva de água prejudica o crescimento da sálvia;"
          ]
      },
      {
          title: "Profundidade do Plantio",
          content: [
            "•	Cerca de 1 centímetro."
          ]
      },
      {
        title: "Espaçamento",
        content: [
          "•	Espaçamento entre plantas: 30 centímetros."
        ]
    },
      {
          title: "Adubação",
          content: [
            "•	Substrato: usar substrato padrão para plantas;",
            "•	Adubo: adicionar 5g por litro de vaso"
          ]
      },
      {
          title: "Benefícios da Sálvia para saúde:",
          content: [
            "• Anticancerígeno;",
            "• Anti-inflamatório ;",
            "• Antinociceptivo;",
            "• Antioxidante;",
            "• Antimicrobiano;",
            "• Antimutagênico;",
            "• Antidemencial;",
            "• Hipoglicemiante;",
            "• Hipolipemiante.",
          ]
      },
      {
        title: "Luminosidade e clima ",
        content: [
          "• Clima preferido: subtropical;",
          "• Faixa de temperatura ideal: 3°C a 29°C ;",
          "• Desenvolvimento otimizado em temperatura amena ;",
          "• Exposição solar: necessita de luz solar direta por algumas horas diárias;"
        ]
      },
      {
        title: "Regas",
        content: [
          "• Regas: manter o solo levemente úmido;",
          "• Evitar encharcamento do solo"
        ]
      },
    ]
  },
];
const imageSources = {
  '01': require('../../assets/cebolinha.jpeg'),
  '02': require('../../assets/alecrim.webp'),
  '03': require('../../assets/tomilho.jpg'),
  '04': require('../../assets/salsinha.webp'),
  '05': require('../../assets/hortela.jpg'),
  '06': require('../../assets/salvia.png')
};
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity key={item.title} onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Image
      source={imageSources[item.id]}
      style={[styles.image, { height: '100%', width: '100%' }]}
    />
    <Text style={[styles.titleItem, { color: textColor }]}>{item.title}</Text>
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
    paddingBottom: 60,

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
