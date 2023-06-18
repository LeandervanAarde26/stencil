import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "./Leaderboard.styles";
import { TextStyles } from "../../Utils/Text";
import { ImageBackground } from "react-native";
import LeaderBoardCard from "../../Components/LeaderBoardCard/LeaderBoardCard.component";
import { useFocusEffect } from "@react-navigation/native";
import { getCompetitionLeaders } from "../../services/firestore.db";


export default function Leaderboard() {
  const [leaders, setLeaders] = useState();

  useFocusEffect(
    useCallback(() => {
      const getLeaders = async () => {
        const leaders = await getCompetitionLeaders();
        console.log("leaders", leaders);
        setLeaders(leaders);
      };

      getLeaders();
    }, [])
  );
  return (
    <View style={styles.container}>
      {leaders && (
        <FlatList
          data={leaders}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <LeaderBoardCard name={item.name} competition={item.competition} image={item.image} position={index +1}/>
          )}
      
        />
      )}

    </View>
  );
}
