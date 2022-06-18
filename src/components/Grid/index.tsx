import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const Grid = ({onClick, value}: any) => {
  
  return (
    <ScrollView>
      <TouchableOpacity onPress={()=> {onClick()}} style={styles.square}>
        <Text style={styles.char}>{value}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    square: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      margin: 10,
      width: 100,
      height: 100,
    },
    char: {
      fontSize: 75,
      fontWeight: '700',
    },
});


export default Grid;
