import { Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Categories.styles";
import CategoryCard from "../../Components/CategoryCard/CategoryCard.component";
import { getCategories } from "../../services/firestore.db";


export default function Categories({navigation}) {
  const [data, setData] = useState()
  useEffect(() => {
    getAllCats()
  }, []);

  const getAllCats = async () => {
    const getRequest = await getCategories()
    setData(getRequest)

  console.log('====================================');
  console.log(getRequest);
  console.log('====================================');
  }
  console.log("DATA", data)

  return (
    <View style={styles.container}>
        {
          data &&
          <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryCard {...item} onPressHandler={() => navigation.navigate("Competitions", {cat: item.id})} />}
          numColumns={2}
        />
        }
    </View>
  );
}
