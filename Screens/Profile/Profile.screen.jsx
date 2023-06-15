import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React,{useCallback, useContext, useEffect, useLayoutEffect, useState} from "react";
import { styles } from "./Profile.styles";
import Input from "../../Components/Input/Input.component";
import Buttn from "../../Components/Button/Button.component";
import * as IPicker from "expo-image-picker";
import { getCurrUser, signOut, updateAuthProfile } from "../../services/firebase.services";
import { FirebaseContext } from "../../store/FirebaseUser.context";

export default function Profile({navigation}) {
  const [image, setImage] = useState(null);
  const fireBaseUserInformation = useContext(FirebaseContext);
  const [values, setValues] = useState(fireBaseUserInformation.user)
  
  const selectImage = async () => {
    let res = await IPicker.launchImageLibraryAsync({
      mediaTypes: IPicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      cancelled: false
    });

    if (!res.canceled) {
      console.log(res);
    
      setValues({...values, profileImage: res.assets[0].uri} )
      console.log("NEWVAL", values.profileImage)
    }
  };

  useEffect(() => {
    console.log("CURRENTLY LOGGED IN USER", values.profileImage)
  })

  const LogOff = () => {
    signOut();

    navigation.navigate("Login")
  }

  const updateUserDetails = () => {
    updateAuthProfile()
  }
  

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
            source={!image ? {uri: fireBaseUserInformation ? values.profileImage: null} : {uri: image}}
            style={styles.profileImage}
          />
        </Pressable>
        <Text style={styles.name}>{fireBaseUserInformation ? values.username: 'Loading...'}</Text>

        <Text style={styles.role}>{fireBaseUserInformation ? values.role: 'Loading...'}</Text>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Text style={styles.sectionHeader}>Your Information</Text>
        <Input
         label={"Name"} 
         placeholder={fireBaseUserInformation ? values.username : 'Enter name'} 
         checkInput={() => {return null}}
         value={values.username}
         err={false}
         onChangeText={(text) => setValues({ ...values, password: text })}
         />

        <Input label={"Website"} placeholder={"Enter your Email"}  checkInput={() => {return null}}/>

        <Input label={"Instagram"} placeholder={"Enter your hjg"} checkInput={() => {return null}} />

        <Input label={"Contact Details"} placeholder={"Enter your Phone number"} checkInput={() => {return null}} />

        <Buttn
          label={"Update Details"}
          buttonType={"secondary"} 
          icon={"edit"}
          onPressHandler={() => console.log('press')}
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
          onPressHandler={() => console.log('presss')}
        />
      </View>
    </ScrollView>
  );
}
