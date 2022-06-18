import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";

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
    rowLine: {
      backgroundColor: colors.primaryDarker,
    },
    square: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: 'transparent',
      margin: 10,
      borderRadius: 5,
      lineHeight: 34,
      marginRight: -1,
      marginTop: -1,
      padding: 0,
      width: 100,
      height: 100,
    },
    char: {
      flexDirection: 'row',
      fontSize: 75,
      fontWeight: '700',
      color: '#fff',
    },
});


export default Grid;
