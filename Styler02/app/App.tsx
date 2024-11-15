import React from "react"
import { SafeAreaView, Text, ScrollView } from "react-native"
import FlatCards from "./components/FlatCards"
import ElevatedCards from "./components/ElevatedCards"
import FancyCards from "./components/FancyCards"
import ActionCards from "./components/ActionCards"

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <ScrollView>
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <FancyCards></FancyCards>
        <ActionCards></ActionCards>
      </ScrollView>
    </SafeAreaView>
  )
}
export default App;