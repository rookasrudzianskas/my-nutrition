import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign, Ionicons} from "@expo/vector-icons";

const FoodListItem = ({item: {item}}: {item: any}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center mx-2 rounded-md bg-[#F6F6F8] p-2 px-3">
      <View className={'items-start flex-1 bg-[#F6F6F8]'}>
        <View className={'flex-row items-center gap-1 bg-[#F6F6F8]'}>
          <Text className={'text-lg'}>{item.label}</Text>
          <Ionicons name="shield-checkmark" size={19} color="#08D472" />
        </View>
        <Text className={'text-[#6F6E72]'}>{item.cal} cal, 1 slice, {item.brand}</Text>
      </View>
      <View className={'bg-[#F6F6F8]'}>
        <TouchableOpacity activeOpacity={0.7} className={'bg-gray-200 rounded-full h-10 w-10 items-center' +
          ' justify-center'}>
          <AntDesign name="plus" size={24} color="#529AF7" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FoodListItem;
