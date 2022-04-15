import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={style.container}>
      <Text style={style.title}>contador {count}</Text>
      <Fab title="+1" onPress={() => setCount(count + 1)} />
      <Fab title="-1" onPress={() => setCount(count - 1)} position="bl"/>
      {/* <TouchableOpacity
        style={style.fablocationLF}
        onPress={() => setCount(count - 1)}>
        <View style={style.fab}>
          <Text style={style.fabtText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
