import { Platform, Text, View } from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { styles } from "./Enter.styles";
import ImagePicker from "../../Components/ImagePicker/ImagePicker.component";
import Input from "../../Components/Input/Input.component";
import { Picker } from "@react-native-picker/picker";
import Buttn from "../../Components/Button/Button.component";
import { Colors } from "../../Utils/Colors";
import * as IPicker from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";
import { TextStyles } from "../../Utils/Text";
import { addCompetitionImage } from "../../services/firestore.db";
import { FirebaseContext } from "../../store/FirebaseUser.context";

const requiredFields = {
  name: "",
  description: "",
  competition: "none",
};

export default function Enter({ route, navigation, data }) {
  const [values, setValues] = useState(requiredFields);
  const { name, description, competition } = values;
  const category = route.params;
  const competitionNames = data.map((lab) => ({id: lab.id, name: lab.competitionName}));
  const fireBaseUserInformation = useContext(FirebaseContext);



  console.log("Competition", competitionNames.id + '\n')

  const [image, setImage] = useState(null);
  const selectImage = async () => {
    let res = await IPicker.launchImageLibraryAsync({
      mediaTypes: IPicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!res.canceled) {
      setImage(res.assets[0].uri);
      console.log(res);
    }
  };

  const testerUploader = async () => {
    var information = {
      title: "BlackandGrey",
      image,
    };

    const succ = await addCompetitionImage(information);
  };

  
  const getCurrUser = () => {
      // const user = getUserInformation();

      // console.log(user);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={TextStyles.headingTwo}>
          Your Entry {category == null ? "" : `into ${category.category}`}
        </Text>
        <ImagePicker image={image} selectImage={selectImage} />
      </View>
      <View style={styles.container2}>
        <Input
          value={name}
          label={"Artwork Name"}
          placeholder={"eg. Neo Trad Face"}
          keyboardType="default"
          autoCapitalize={"none"}
          onChangeText={(text) => setValues({ ...values, name: text })}
        />

        <Input
          value={description}
          label={"Artwork Description"}
          keyboardType="default"
          autoCapitalize={"none"}
          // multiline={true}

          // numberOfLines={6}
          onChangeText={(text) => setValues({ ...values, description: text })}
        />

        <Text style={styles.label}>Add Competition</Text>

        {category == null ? (
          <View
            style={styles.pickerContainer}
            itemStyle={{
              color: Colors.primary,
              backgroundColor: Colors.primary,
            }}
          >
            <Picker
              style={styles.picker}
              selectedValue={competition}
              onValueChange={(item) =>
                setValues({ ...values, competition: item })
              }
            >
              {data &&
                competitionNames.map((i, index) => (
                  <Picker.Item
                    key={i.id}
                    style={styles.pickerItem}
                    label={i.name}
                    color={Platform.OS === "android" ? "black" : "white"}
                    value={i.name}
                  />
                ))}
            </Picker>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <Buttn
            label={`Add Entry to ${values.competition}`}
            buttonType={"secondary"}
            icon={"add-circle-outline"}
            onPressHandler={getCurrUser}
          />
        </View>
      </View>
    </>
  );
}
