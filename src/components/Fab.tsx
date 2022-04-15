import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position}: Props) => {
  return (
    <TouchableOpacity
      style={[
        style.fabLocation,
        position === 'bl' ? style.fabLocationLF : style.fabLocationRG,
      ]}
      onPress={onPress}>
      <View style={style.fab}>
        <Text style={style.fabtText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabtText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  fabLocationLF: {
    left: 25,
  },
  fabLocationRG: {
    right: 25,
  },
});
