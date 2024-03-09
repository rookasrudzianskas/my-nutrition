import {Button, FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {Link} from "expo-router";
import FoodListItem from "@/components/food-list-item";

const FOOD_ITEMS = [
  {
    food: { label: 'Pizza', nutrients: { ENERC_KCAL: 100 }, brand: 'Dominos' },
  },
  {
    food: { label: 'Pizza', nutrients: { ENERC_KCAL: 100 }, brand: 'Dominos' },
  },
]

export default function TabOneScreen() {
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
        data={FOOD_ITEMS}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodListItem item={item} />}
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
