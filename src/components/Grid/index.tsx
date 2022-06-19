import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../../utils/colors'

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
      backgroundColor: colors.primary,
      margin: 10,
      width: 110,
      height: 110,
    },
    char: {
      fontSize: 75,
      fontWeight: '700',
      color: colors.darkGrey
    },
});


export default Grid;
