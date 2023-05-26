import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import Buttn from "../Button/Button.component";
import { styles } from "./Modal.styles";

export default function SModal({ value, toggleModal, text }) {
  const [modalVisible, setModalVisible] = useState(value);

  useEffect(() => {
    setModalVisible(value);
  }, [value]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible((prev) => !prev);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require("../../assets/testerImage.png")}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <Text style={styles.modalText}>{text}</Text>
          <View style={styles.modalButtons}>
            <Buttn
              buttonType={"primary"}
              onPressHandler={toggleModal}
              label={"Go Back"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
