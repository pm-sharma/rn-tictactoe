import React from "react";
import {
  SafeAreaView,
  ScrollView
} from "react-native";
import PlayGame from "./src/components/Play/PlayGame";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PlayGame />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
