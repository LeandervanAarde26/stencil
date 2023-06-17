import { Platform, Text, View } from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { styles } from "./Enter.styles";
import ImagePicker from "../../Components/ImagePicker/ImagePicker.component";
import Input from "../../Components/Input/Input.component";
import { Picker } from "@react-native-picker/picker";
import Buttn from "../../Components/Button/Button.component";
import { Colors } from "../../Utils/Colors";
import * as IPicker from "expo-image-picker";

import { TextStyles } from "../../Utils/Text";
// import { CommonActions } from 'react-navigation/native';
import {
  EnterCompetition,
  addCompetitionImage,
} from "../../services/firestore.db";
import { FirebaseContext } from "../../store/FirebaseUser.context";
import { FireBaseCompetitionContext } from "../../store/FireBaseCompetitions.context";
import SModal from "../../Components/Modal/Modal.component";
import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

const requiredFields = {
  name: "",
  description: "",
  competition: "none",
  image: null,
};

export default function Enter({ route }) {
  const [values, setValues] = useState(requiredFields);
  const { name, description, competition, competitionId } = values;
  // let category = route.params.category;
  const [nameErr, setNameErr] = useState(false);
  const [descErr, setDescErr] = useState(false);
  const [comErr, setCompErr] = useState(false);
  const fireBaseCurrentUser = useContext(FirebaseContext);
  // const fireBaseUserInformation = useContext(FirebaseContext);
  const fireBaseCompetitionData = useContext(FireBaseCompetitionContext);
  const isFocused = useIsFocused();

  const competitionNames = fireBaseCompetitionData.map((lab) => ({
    id: lab.id,
    name: lab.competitionName,
  }));

  const [modalVis, setModalVis] = useState(false);
  const [modalText, setModalText] = useState("uploading your entry...");
  const navigation = useNavigation();

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
      setValues({ ...values, image: res.assets[0].uri });
      console.log(res);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      navigation.setParams({ category: null });
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!isFocused) {
      console.log("Left the screen");
    }

    
    if (route.params?.category) {
      setValues({
        ...values,
        competition:
          route.params.category === null ? competition : route.params?.category,
      });
    } else {
      setValues({
        ...values,
        competition: competition
      })
    }

  }, [isFocused]);

  const validateInputs = (key) => {
    switch (key) {
      case "name":
        name.length < 3 ? setNameErr(true) : setNameErr(false);
        break;
      case "description":
        description.length < 3 ? setDescErr(true) : setDescErr(false);
        break;
      default:
        console.log("Hey");
        break;
    }
  };

  const handleClick = async () => {
    // const entry = await EnterCompetition(values, fireBaseCurrentUser.userId);
    // if (entry) {
    //   setValues({
    //     name: "",
    //     description: "",
    //     competition: "none",
    //     image: null,
    //   });
    //   setImage(null);
    //   setModalVis((prev) => !prev);

    //   setTimeout(() => {
    //     setModalVis((prev) => !prev);
    //   }, 2000);
    // }

    console.log(values.competition);
    console.log(route.params);
  };
  return (
    <>
      <View style={styles.container}>
        {modalVis && (
          <SModal
            value={modalVis}
            toggleModal={null}
            text={"Uploading your entry..."}
          />
        )}
        <Text style={TextStyles.headingTwo}>
          Your Entry{" "}
          {route.params?.category == undefined ||
          route.params?.category == null ||
          route.params?.category === ""
            ? ""
            : `into ${route.params?.category}`}
        </Text>
        <ImagePicker image={image} selectImage={selectImage} />
      </View>
      <View style={styles.container2}>
        <Input
          value={name}
          label={nameErr ? "Enter valid artwork name" : "Artwork Name"}
          placeholder={"eg. Neo Trad Face"}
          keyboardType="default"
          autoCapitalize={"none"}
          onChangeText={(text) => setValues({ ...values, name: text })}
          checkInput={() => validateInputs("name")}
          err={nameErr}
        />

        <Input
          value={description}
          label={descErr ? "no description provided" : "Artwork Description"}
          keyboardType="default"
          autoCapitalize={"none"}
          checkInput={() => validateInputs("description")}
          onChangeText={(text) => setValues({ ...values, description: text })}
          err={descErr}
        />

        <Text style={styles.label}>Add Competition</Text>

        {route.params?.category !== null ? null : (
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
              mode="dropdown"
            >
              <Picker.Item label="None" value={null} />
              {fireBaseCompetitionData &&
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
        )}

        <View style={styles.buttonContainer}>
          {!nameErr && !descErr && !comErr && (
            <Buttn
              label={`Submit your entry`}
              buttonType={"secondary"}
              icon={"add-circle-outline"}
              onPressHandler={handleClick}
            />
          )}
        </View>
      </View>
    </>
  );
}
