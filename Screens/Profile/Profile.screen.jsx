import {
  Text,
  View,
  ImageBackground,
  Image,
  Butto,
  n,
  ScrollView,
  Pressable,
} from "react-native";
import React,{useState} from "react";
import { styles } from "./Profile.styles";
import Input from "../../Components/Input/Input.component";
import Buttn from "../../Components/Button/Button.component";
import * as IPicker from "expo-image-picker";

export default function Profile() {

  const [image, setImage] = useState(null);
  const selectImage = async () => {
    let res = await IPicker.launchImageLibraryAsync({
      mediaTypes: IPicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(res);

    if (!res.canceled) {
      setImage(res.assets[0].uri);
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.imageContainer}> */}
      <ImageBackground
        source={require("../../assets/profileBg.png")}
        resizeMode="cover"
        style={styles.imageContainer}
      >
        <Pressable   style={({ pressed }) => (!pressed ? null: styles.pressed)} onPress={selectImage}>
          <Image
            source={!image ? require('../../assets/ProfileDefault.jpg') : {uri: image}}
            style={styles.profileImage}
          />
        </Pressable>

        <Text style={styles.name}>Leander van Aarde</Text>

        <Text style={styles.role}>Tattoo enthusiast</Text>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Text style={styles.sectionHeader}>Your Information</Text>
        <Input label={"Name"} placeholder={"Enter your Email"} />

        <Input label={"Website"} placeholder={"Enter your Email"} />

        <Input label={"Instagram"} placeholder={"Enter your Email"} />

        <Input label={"Contact Details"} placeholder={"Enter your Email"} />

        <Buttn
          label={"Update Details"}
          buttonType={"secondary"}
          icon={"edit"}
        />
        <Buttn
          label={"Sign out of your account"}
          buttonType={"primaryOutline"}
          icon={"logout"}
        />

        <Text style={styles.sectionHeader}>Danger Zone</Text>
        <Buttn
          label={"Delete your account"}
          buttonType={"danger"}
          icon={"person-remove"}
        />
      </View>
    </ScrollView>
  );
}
