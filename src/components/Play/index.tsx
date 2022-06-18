import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Grid from '../Grid/index';

const Play = ({squares, onClick}: any) => {

  const renderSquare = (i: any) => {
    return (
      <Grid
        onClick={() => {
          onClick(i);
        }}
        value={squares?.[i]}
      />
    );
  }

  return (
    <ScrollView>
      <View style={styles.board}>
        <View style={styles.boardRow}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    </ScrollView>
  );
};

  const styles = StyleSheet.create({
    board: {
    },
    boardRow: {
      flexDirection: 'row',
    },
});

export default Play;
