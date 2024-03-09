import { Text, View } from '@/components/Themed';
import {StatusBar} from "expo-status-bar";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";
import FoodListItem from "@/components/food-list-item";
import {ActivityIndicator, Button, FlatList, TextInput} from "react-native";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import dayjs from "dayjs";

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

const query = gql`
    query search($ingr: String, $upc: String) {
        search(ingr: $ingr, upc: $upc) {
            text
            hints {
                food {
                    label
                    brand
                    foodId
                    nutrients {
                        ENERC_KCAL
                    }
                }
            }
        }
    }
`;
export default function TabTwoScreen() {
  const [search, setSearch] = useState<string>('');
  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  const performSearch = (search: string) => {
    runSearch({ variables: { ingr: search } });
  }

  if (loading) return <View className={'h-screen flex items-center justify-center'}><ActivityIndicator /></View>;
  if (error) return <View className={'h-screen flex items-center justify-center'}><Text>Failed to fetch data {error.message}</Text></View>;

  const items = data?.search?.hints || [];

  // console.log(data)

  return (
    <View className="flex-1 bg-white">
      <TextInput className={'mx-3 h-10 my-2 bg-[#F6F6F8] pl-4 rounded-md'} value={search} onChangeText={setSearch} placeholder={'Search'} />
      {search && <Button title={'Search'} onPress={() => performSearch(search)} />}
      <View className={'flex-row items-center justify-between mx-3 mt-2'}>
        <Text className={'text-lg font-semibold'}>Search Results</Text>
        <View className={'flex-row gap-1 border border-1 border-gray-300 rounded-full px-2 items-center' +
          ' justify-center'}>
          <Ionicons className={'mb-4s'} name="shield-checkmark" size={18} color="#6F6E72" />
          <Text className={'mb-1 text-base'}>Only</Text>
        </View>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <FoodListItem item={item} />
        )}
        keyExtractor={(key) => key.brand}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <View className={'h-screen flex items-center justify-center'}><Text>Search a food</Text></View>}
        contentContainerStyle={{
          gap: 5,
          marginTop: 15,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
