import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./ImagePicker.styles";
import Buttn from "../Button/Button.component";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ImagePicker({image, selectImage}) {


  return (
    <Pressable
      style={({ pressed }) => (!pressed ? styles.container : styles.pressed)}
      onPress={selectImage}
    >
      <View style={styles.inner}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <>
            <MaterialIcons
              name="add-circle-outline"
              size={80}
              color={"white"}
            />
            <Text style={styles.addButton}>Upload Image</Text>
          </>
        )}
      </View>
    </Pressable>
  );
}
