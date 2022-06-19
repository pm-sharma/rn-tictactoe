import React from "react";
import {
  SafeAreaView,
  ScrollView
} from "react-native";
import Play from "./src/components/Play";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Play />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
