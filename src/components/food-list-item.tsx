import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {gql, useMutation} from "@apollo/client";
import {useRouter} from "expo-router";

const mutation = gql`
    mutation MyMutation(
        $food_id: String!
        $kcal: Int!
        $label: String!
        $user_id: String!
    ) {
        insertFood_log(
            food_id: $food_id
            kcal: $kcal
            label: $label
            user_id: $user_id
        ) {
            created_at
            food_id
            id
            kcal
            label
            user_id
        }
    }
`;

const FoodListItem = ({item}: {item: any}) => {
  const router = useRouter();
  const [logFood] = useMutation(mutation, {
    refetchQueries: ['foodLogsForDate'],
  });

  const onPlusPressed = async () => {
    await logFood({
      variables: {
        food_id: item.food.foodId,
        kcal: item.food.nutrients.ENERC_KCAL,
        label: item.food.label,
        user_id: 'rokas',
      },
    });
    router.back();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center mx-2 rounded-md bg-[#F6F6F8] p-2 px-3">
      <View className={'items-start flex-1 bg-[#F6F6F8]'}>
        <View className={'flex-row items-center gap-1 bg-[#F6F6F8]'}>
          <Text className={'text-lg'}>{item?.food?.label}</Text>
          <Ionicons name="shield-checkmark" size={19} color="#08D472" />
        </View>
        <Text className={'text-[#6F6E72]'}>{item?.food?.nutrients?.ENERC_KCAL} cal, 1 slice, {item?.food?.brand}</Text>
      </View>
      <View className={'bg-[#F6F6F8]'}>
        <TouchableOpacity onPress={onPlusPressed} activeOpacity={0.7} className={'bg-gray-200 rounded-full h-10 w-10' +
          ' items-center' +
          ' justify-center'}>
          <AntDesign name="plus" size={24} color="#529AF7" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FoodListItem;
