/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { create } from 'zustand';

type Store = {
  count: number
  inc: () => void
}
const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export const App = () => {
  const { count, inc } = useStore()

  return (
    <SafeAreaView style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
      <View style={{marginTop:10, flexDirection:'row', justifyContent:'center'}}>
        <Text style={{fontSize:32,fontWeight:'bold'}}>{count}</Text>
      </View>
      <View style={{marginTop:10, flexDirection:'row', justifyContent:'center'}}>
        <Button title="one up" onPress={inc} />
      </View>
    </SafeAreaView>
  );
};

export default App;
