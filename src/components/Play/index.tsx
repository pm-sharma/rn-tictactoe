import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AllSquares from "./AllSquares";

const Play = () => {
    const [historyVal, setHistoryVal] = useState<any>([{squares: Array(9).fill(null)}])
    const [stepNumber, setStepNumber] = useState<number>(0)
    const [xIsNext, setXIsNext] = useState<boolean>(true)
    const calculateWinner = (squares: any) => {

      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
      }
      return null;
    }

    const handleClick = (i: number) => {
      const clickHistory = historyVal.slice(0, stepNumber + 1);
      const current = clickHistory[clickHistory.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares?.[i]) {
        return;
      }
      squares[i] = xIsNext ? 'X' : 'O';

      setHistoryVal(clickHistory.concat([{squares}]))
      setStepNumber(clickHistory.length)
      setXIsNext(!xIsNext)
    }

    const newGame = () => {
      setHistoryVal([{squares: Array(9).fill(null)}])
      setStepNumber(0)
      setXIsNext(true)
    }

    const current = historyVal[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;

    if (winner) {
      status = `${winner} Won!`;
    } else {
      status = `Player ${xIsNext ? 'X' : 'O'}'s  turn`;
    }

    return (
      <ScrollView>
          <View style={styles.game}>
            <Text style={styles.status}> {status} </Text>

            <View style={{}}>
              <AllSquares
                squares={historyVal[stepNumber].squares}
                onClick={(i: number) => handleClick(i)}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  newGame();
                }}>
                <Text style={styles.newText}>Reset </Text>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    status: {
      textAlign: "center",
      fontWeight: "700",
    },
    game: {
      margin: 10
    },
    newText: {
      textAlign: "right",
      fontWeight: "700",
      marginTop: 10,
      marginRight: 10
    },
})

export default Play;
