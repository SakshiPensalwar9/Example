// import { StatusBar } from 'expo-status-bar';
// import React,{useRef,useState} from 'react'; 
// import { Dimensions, FlatList,Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// const {width,height}=Dimensions.get('window');
// const carouselIteam = require('./assets/carousel.json');
// const viewConfiRef = {viewAreaCoveragePercentThreshold:95};

// interface CarouselIteams {
//   url:string;
// }

// export default function App() {
//   let flatListRef = useRef<FlatList<CarouselIteams> | null>();
//   const [currentIndex, setCurrentIndex] = useState(0);
 

//   const onViewRef = useRef(({changed} : {changed:any})=>{
//     if(changed[0],isViewable) {
//       setCurrentIndex(changed[0].index);
//     }
//   });
//   const scrollToIndex = (index:number) =>{
//     flatListRef.current?.scrollToIndex({animated:true,index:index});
//   }
//   const renderItems: React.FC<{item: CarouselIteams}> = ({item}) => {
//     return(
//     <TouchableOpacity onPress={()=> console.log('clicked')}
//     activeOpacity={1}
//     >
//       <Image source={{uri:item.url}} style={styles.image} />
//       <View style={styles.footer}>
//       <Text style={styles.footerText}>{}</Text>
//       </View>

//     </TouchableOpacity>
//     );
//   };
//   return (
//     <View style={styles.container}>
      
//       <StatusBar style="auto" />

//       <FlatList 
//       data={carouselIteam}
//       renderItem={renderItems}
//       keyExtractor={(iteam,index) =>index.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       pagingEnabled
//       ref={(ref)=>{flatListRef.current= ref;
//       }}
//       style={styles.carousel}
//       viewabilityConfig={viewConfiRef}
//       onViewableItemsChanged={onViewRef.current}
//       />
//       <View style={styles.dotView}>
//         {carouselIteam.map(({},index: number)=>(
//           <TouchableOpacity key
//           ={index.toString()}
//             style={[
//               styles.circle,
//               {backgroundColor:index == currentIndex ?'black':'grey'},
//               ]}
//               onPress={()=> scrollToIndex(index)}
//               />
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   carousel:{
//     maxHeight:300,

//   },
//   image:{
//     width,
//     height:170,
//     resizeMode:'cover',
//     marginVertical:100,
//     padding:50,
//     borderRadius:30,
//   },
//   footer:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     height:30,
//     paddingHorizontal:40,
//     alignItems:'center',
//     backgroundColor:'#000'
//   },
//   footerText:{
//     color:'#fff',
//     fontSize:18,
//     fontweight:'bold',
//   },
//   dotView:{
//     flexDirection:'row',
//     justifyContent:'center',
//     marginVertical:-22,
//   },
//   circle:{
//     width:10,
//     height:10,
//     backgroundColor:'grey',
//     borderRadius:50,
//     marginHorizontal:5,
//   },
// });

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search for over 5000 products"
          />
          <Button title="Search" color="#007bff" />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <Image
            source={require('./image1.jpg')}
            style={styles.image}
          />
          <Text>LAYS</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require('./image2.jpeg')}
            style={styles.image}
          />
          <Text>KURKURE</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require('./image2.jpeg')}
            style={styles.image}
          />
          <Text>KURKURE</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require('./image2.jpeg')}
            style={styles.image}
          />
          <Text>KURKURE</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: 'purple',
    padding: 10,
    alignItems: 'center',
  },
  searchBar: {
    maxWidth: 800,
    margin: 0,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'center',
  },
  imageBox: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    width: 150,
    height: 200,
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
});

export default App;
