import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Grid from '../Grid/index';

const AllSquares = ({squares, onClick}: any) => {
  const [arrLength, setArrLength] = useState<Array<Number>>(new Array(9).fill(0))
  const renderGrid = (i: any) => {
    return (
      <Grid onClick={() => { onClick(i)} } value={squares?.[i]} />
    );
  }

  return (
    <ScrollView>
      <View style={styles.board}>
        {arrLength.map((val, ind)=>{
          return(
            <View style={styles.boardRow}>
              {renderGrid(ind)}
            </View>
          )
        })}
      </View>
    </ScrollView>
  );
};

  const styles = StyleSheet.create({
    board: {
      display: 'flex',
      flexWrap: 'wrap',

    },
    boardRow: {     
      height : 100,
      width: 100
    },
});

export default AllSquares;
