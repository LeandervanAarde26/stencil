import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "./Leaderboard.styles";
import { TextStyles } from "../../Utils/Text";
import { ImageBackground } from "react-native";
import LeaderBoardCard from "../../Components/LeaderBoardCard/LeaderBoardCard.component";
import { useFocusEffect } from "@react-navigation/native";
import { getCompetitionLeaders } from "../../services/firestore.db";


export default function Leaderboard({route, navigation}) {
  const [leaders, setLeaders] = useState();
  const routParams = route.params;

  console.log(routParams)

  useFocusEffect(
    useCallback(() => {
      const getLeaders = async () => {
        const leaders = await getCompetitionLeaders();
        if(routParams?.compCat !== null && leaders){
            let filter = leaders.filter((document) => {
              return  document.competition ===  routParams?.compCat
            })
            console.log('====================================');
            console.log("COMPETITIONS", filter)
            console.log('====================================');
            setLeaders(filter);
        } else{
        console.log("leaders", leaders);
        setLeaders(leaders);
        }

      };
      getLeaders();


    }, [routParams])
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
