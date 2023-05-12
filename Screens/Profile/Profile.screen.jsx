import {
  Text,
  View,
  ImageBackground,
  Image,
  Butto,
  n,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./Profile.styles";
import Input from "../../Components/Input/Input.component";
import Buttn from "../../Components/Button/Button.component";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.imageContainer}> */}
      <ImageBackground
        source={require("../../assets/profileBg.png")}
        resizeMode="cover"
        style={styles.imageContainer}
      >
        <Image
          source={require("../../assets/profileImage.png")}
          style={styles.profileImage}
        />

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
        <Text style={styles.sectionHeader}>Delete Account</Text>
        <Buttn
          label={"Update Details"}
          buttonType={"danger"}
          icon={"person-remove"}
        />
      </View>
    </ScrollView>
  );
}
