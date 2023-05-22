import { Platform, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Enter.styles";
import ImagePicker from "../../Components/ImagePicker/ImagePicker.component";
import Input from "../../Components/Input/Input.component";
import { Picker } from "@react-native-picker/picker";
import Buttn from "../../Components/Button/Button.component";
import { Colors } from "../../Utils/Colors";
import * as IPicker from "expo-image-picker";

const requiredFields = {
  name: "",
  description: "",
  competition: "none",
};

export default function Enter() {
  const [values, setValues] = useState(requiredFields);
  const { name, description, competition } = values;

  const [image, setImage] = useState(null);
  const selectImage = async () => {
    let res = await IPicker.launchImageLibraryAsync({
      mediaTypes: IPicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!res.canceled) {
      setImage(res.assets[0].uri);
      console.log(res);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Your Entry</Text>
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

        <Text style={styles.label}> Add Competition</Text>
        <View
          style={styles.pickerContainer}
          itemStyle={{ color: Colors.primary, backgroundColor: Colors.primary }}
        >
          <Picker
            style={styles.picker}
            selectedValue={competition}
            onValueChange={(item) =>
              setValues({ ...values, competition: item })
            }
          >
            <Picker.Item
              style={styles.pickerItem}
              label="Neo Traditional"
              color={Platform.OS === "android" ? "black" : "white"}
              value="Neo Traditional"
            />
            <Picker.Item
              style={styles.pickerItem}
              label="Not Traditional"
              color={Platform.OS === "android" ? "black" : "white"}
              value="not Traditional"
            />
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <Buttn
            label={`Add Entry to ${values.competition}`}
            buttonType={"secondary"}
            icon={"add-circle-outline"}
          />
        </View>
      </View>
    </>
  );
}
