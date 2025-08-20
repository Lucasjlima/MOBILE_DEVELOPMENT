import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name} >Lucas José!</Text>
      <Text style={styles.warning} >Welcome to React Native!</Text>
      <Text style={styles.title} >This is my first aplication using React Native</Text>
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
  }
});



