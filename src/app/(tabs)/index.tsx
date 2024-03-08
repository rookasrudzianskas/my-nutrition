import { Text, View } from '@/components/Themed';
import {StatusBar} from "expo-status-bar";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import React from "react";
import FoodListItem from "@/components/food-list-item";

export default function TabOneScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className={'flex-row items-center justify-between mx-3 mt-4'}>
        <Text className={'text-lg font-semibold'}>Search Results</Text>
        <View className={'flex-row gap-1 border border-1 border-gray-300 rounded-full px-2 items-center' +
          ' justify-center'}>
          <Ionicons className={'mb-4s'} name="shield-checkmark" size={18} color="#6F6E72" />
          <Text className={'mb-1 text-base'}>Only</Text>
        </View>
      </View>
      <FoodListItem item={{
        label: 'Pizza',
        cal: '3243',
        brand: 'Pizza',
      }} />
      <StatusBar style="auto" />
    </View>
  );
}
