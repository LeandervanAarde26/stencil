import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { styles } from "./Profile.styles";
import Input from "../../Components/Input/Input.component";
import Buttn from "../../Components/Button/Button.component";
import * as IPicker from "expo-image-picker";
import {
  deleteAccount,
  getCurrUser,
  signOut,
  updateAuthProfile,
} from "../../services/firebase.services";
import { FirebaseContext } from "../../store/FirebaseUser.context";
import { getCategoryWinners, updateProfile, updateProfileImage } from "../../services/firestore.db";

export default function Profile({ navigation }) {
  const [image, setImage] = useState(null);
  const fireBaseUserInformation = useContext(FirebaseContext);
  const [values, setValues] = useState(fireBaseUserInformation.user);
  const { username, website, Instagram, contactDetails } = values;
  const user = fireBaseUserInformation.userId;
  const [modalVisible, setModalVisible] = useState(false);
  
  const selectImage = async () => {
    let res = await IPicker.launchImageLibraryAsync({
      mediaTypes: IPicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      cancelled: false,
    });

    if (!res.canceled) {
      console.log(res);
      setValues({...values, profileImage: res.assets[0].uri})
      const updateImage = await updateProfileImage( res.assets[0].uri, user);
    }
  };
  const deleteMyAccount = async () => {
   const deleted = await deleteAccount();

   if(deleted){
    navigation.navigate("Register")
   } else {
    Alert.alert(
      "Failed to delete account",
      `We're sorry we couldn't delete your account, try again`,
      [
        {
          text: "Okay"
        }
      ]
    )
   }
  }

  const confirmDelete = () => {
    Alert.alert(
      `Remove acoount associated with ${values.email}?`,
      "We are so sad to see you go!",
      [
        {
          text: "Delete my account",
          onPress: () => deleteMyAccount()
        }, 
        {
          text: "Cancel",
          style: 'destructive',
       
        },

      ]
    )
  }

  const LogOff = () => {
    signOut();
    navigation.navigate("Login");
  };

  const updateUserDetails = async () => {
    // const updated = await updateProfile(values);
    console.log("NEW VALUES", values.profileImage);
    updateProfile(values, user);

  };
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.imageContainer}> */}
      <ImageBackground
        source={require("../../assets/profileBg.png")}
        resizeMode="cover"
        style={styles.imageContainer}
      >
        <Pressable
          style={({ pressed }) => (!pressed ? null : styles.pressed)}
          onPress={selectImage}
        >
          <Image
            source={
              !image
                ? { uri: fireBaseUserInformation ? values.profileImage : null }
                : { uri: image }
            }
            style={styles.profileImage}
          />
        </Pressable>
        <Text style={styles.name}>
          {fireBaseUserInformation
            ? fireBaseUserInformation.user["username"]
            : "Loading..."}
        </Text>

        <Text style={styles.role}>
          Competitions won:  {fireBaseUserInformation ? values.competitionsWon : "Loading..."}
        </Text>

        <Text style={styles.role}>
          {fireBaseUserInformation ? values.role : "Loading..."}
        </Text>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Text style={styles.sectionHeader}>Your Information</Text>
        <Input
          label={"Name"}
          placeholder={fireBaseUserInformation ? values.username : "Enter name"}
          checkInput={() => {
            return null;
          }}
          value={values.username}
          err={false}
          onChangeText={(text) => setValues({ ...values, username: text })}
        />

        <Input
          label={"Website"}
          placeholder={
            fireBaseUserInformation &&
            fireBaseUserInformation.user["website"] == ""
              ? "Your website URL"
              : fireBaseUserInformation.user["website"]
          }
          value={values.website}
          err={false}
          onChangeText={(text) => setValues({ ...values, website: text })}
          checkInput={() => {
            return null;
          }}
        />

        <Input
          label={"Instagram"}
          placeholder={
            fireBaseUserInformation &&
            fireBaseUserInformation.user["Instagram"] == ""
              ? "@YourHandle"
              : fireBaseUserInformation.user["Instagram"]
          }
          value={values.Instagram}
          err={false}
          onChangeText={(text) => setValues({ ...values, Instagram: text })}
          checkInput={() => {
            return null;
          }}
        />

        <Input
          label={"Contact Details"}
          placeholder={
            fireBaseUserInformation &&
            fireBaseUserInformation.user["contactDetails"] == ""
              ? "Your number"
              : fireBaseUserInformation.user["contactDetails"]
          }
          onChangeText={(text) =>
            setValues({ ...values, contactDetails: text })
          }
          value={values.contactDetails}
          keyboardType="number-pad"
          checkInput={() => {
            return null;
          }}
        />

        <Buttn
          label={"Update Details"}
          buttonType={"secondary"}
          icon={"edit"}
          onPressHandler={updateUserDetails}
        />
        <Buttn
          label={"Sign out of your account"}
          buttonType={"primaryOutline"}
          icon={"logout"}
          onPressHandler={LogOff}
        />

        <Text style={styles.sectionHeader}>Danger Zone</Text>
        <Buttn
          label={"Delete your account"}
          buttonType={"danger"}
          icon={"person-remove"}
          onPressHandler={confirmDelete}
        />
      </View>
    </ScrollView>
  );
}
