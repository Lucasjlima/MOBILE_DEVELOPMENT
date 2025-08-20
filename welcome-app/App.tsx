import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='input your name' style={styles.input}
      />
      <Text style={styles.name} >Lucas José!</Text>
      <Text style={styles.warning} >Welcome to React Native!</Text>
      <Text style={styles.title} >This is my first application using React Native</Text>
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        />
        <Image 
        source={require("./assets/cloud-sad.webp")}
        style={styles.image}
        />
        <Button title='Click Me!' onPress={() => alert("Button has been clicked!")}
        />
        
        <Text  style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non reprehenderit cum. Aperiam consectetur expedita voluptatum. Cum ea libero, repudiandae ipsa atque nam, officiis saepe, in rem illum similique reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non reprehenderit cum. Aperiam consectetur expedita voluptatum. Cum ea libero, repudiandae ipsa atque nam, officiis saepe, in rem illum similique reiciendis.
        </Text>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  warning : {
    fontSize : 24,
    color : "blue",
    fontWeight : "bold"
  },

  title : {
    fontSize : 25,
    textAlign : "center",
    color : "yellow"
  },
  name : {
    color : "#fff",
    fontSize : 20
  },
  image : {
    width: 100,
    height : 100,
    borderRadius : 10,
    margin : 10
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text : {
    textAlign : "justify",
    margin : 20,
    color : "black"
  }

});



