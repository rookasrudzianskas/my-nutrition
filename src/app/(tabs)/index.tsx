import {ActivityIndicator, Button, FlatList, StyleSheet} from 'react-native';

import { Text, View } from '@/components/Themed';
import {Link} from "expo-router";
import FoodListItem from "@/components/food-list-item";
import {gql, useQuery} from "@apollo/client";
import dayjs from "dayjs";
import React from "react";
import FoodLogListItem from "@/components/food-log-list-item";

const FOOD_ITEMS = [
  {
    food: { label: 'Pizza', nutrients: { ENERC_KCAL: 100 }, brand: 'Dominos' },
  },
  {
    food: { label: 'Pizza', nutrients: { ENERC_KCAL: 100 }, brand: 'Dominos' },
  },
]

const query = gql`
    query foodLogsForDate($date: Date!, $user_id: String!) {
        foodLogsForDate(date: $date, user_id: $user_id) {
            food_id
            user_id
            created_at
            label
            kcal
            id
        }
    }
`;


export default function TabOneScreen() {
  const user_id = 'rokas';
  const { data, loading, error } = useQuery(query, {
    variables: {
      date: dayjs().format('YYYY-MM-DD'),
      user_id,
    },
  });

  if (loading) return <View className={'h-screen flex items-center justify-center'}><ActivityIndicator /></View>;
  if (error) return <View className={'h-screen flex items-center justify-center'}><Text>Failed to fetch data {error.message}</Text></View>;

  return (
    <View style={styles.container}>
      <View className={'flex-row mx-3 items-center justify-between mt-5'}>
        <Text className={'text-lg text-gray-500 font-semibold'}>Calories</Text>
        <Text> 1770 - 360 = 1692</Text>
      </View>

      <View className={'flex-row mx-3 items-center justify-between'}>
        <Text className={'text-lg text-gray-500 font-semibold'}>Today's food</Text>
        <Link href="/search" asChild>
          <Button title="ADD FOOD" />
        </Link>
      </View>
      <FlatList
        data={data.foodLogsForDate}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    gap: 10,
  }
});
