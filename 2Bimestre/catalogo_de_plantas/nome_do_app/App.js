import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Text, View} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
    <View>
      <Text>Catalogo de Plantas</Text>
    </View>
    <View>
  <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={'Babosa'}
      />

        <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={'Rosa'}
      />

        <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={'Abacatero'}
      />
      
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    height: '100%',
    width: '100%', 
    backgroundColor: '#91e999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
