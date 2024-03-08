import { Text, View } from '@/components/Themed';
import {StatusBar} from "expo-status-bar";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";
import FoodListItem from "@/components/food-list-item";
import {FlatList, TextInput} from "react-native";

const FOOD_DATA = [
  {
    label: 'Pizza',
    cal: '234',
    brand: 'Pizza',
  },
  {
    label: 'Burger',
    cal: '342',
    brand: 'Burger',
  },
  {
    label: 'Chilli Pepers',
    cal: '343',
    brand: 'Ch'
  }
]

export default function TabOneScreen() {
  const [search, setSearch] = useState<string>('');

  return (
    <View className="flex-1 bg-white">
      <TextInput className={'mx-3 h-10 my-2 bg-[#F6F6F8] pl-4 rounded-md'} value={search} onChangeText={setSearch} placeholder={'Search'} />
      <View className={'flex-row items-center justify-between mx-3 mt-2'}>
        <Text className={'text-lg font-semibold'}>Search Results</Text>
        <View className={'flex-row gap-1 border border-1 border-gray-300 rounded-full px-2 items-center' +
          ' justify-center'}>
          <Ionicons className={'mb-4s'} name="shield-checkmark" size={18} color="#6F6E72" />
          <Text className={'mb-1 text-base'}>Only</Text>
        </View>
      </View>
      <FlatList
        data={FOOD_DATA}
        renderItem={(data) => (
          <FoodListItem item={data} />
        )}
        keyExtractor={(key) => key.brand}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          marginTop: 15,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
