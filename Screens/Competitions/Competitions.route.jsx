import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Competitions.styles";
import Buttn from "../../Components/Button/Button.component";
import CompetitionCard from "../../Components/CompetitionCard/CompetitionCard.component";

const competitions = [
  {
    remainingTime: 1684685158,
    description: "Join the ultimate tattoo showdown and let your art speak for itself!",
    competitionName: "Inked Masterpiece",
    category: "Realism Tattoos",
    contestants: 20,
    image: "URL to competition image 1"
  },
  {
    remainingTime: 1685551385,
    description: "Unleash your creativity and imagination in this fantasy-themed tattoo competition.",
    competitionName: "Fantastical Ink Fest",
    category: "Fantasy Tattoos",
    contestants: 15,
    image: "URL to competition image 2"
  },
  {
    remainingTime: 1685551385,
    description: "Calling all ink enthusiasts! Showcase your expertise in this black and grey tattoo challenge.",
    competitionName: "Shades of Gray",
    category: "Black and Grey Tattoos",
    contestants: 12,
    image: "URL to competition image 3"
  },
  {
    remainingTime: 1685551385,
    description: "Show off your vibrant and colorful tattoos in this electrifying ink extravaganza.",
    competitionName: "Color Explosion",
    category: "Neo-Traditional Tattoos",
    contestants: 18,
    image: "URL to competition image 4"
  },
  {
    remainingTime: 1685551385,
    description: "Experience the artistry of Japanese tattoos in this traditional Irezumi competition.",
    competitionName: "Irezumi Artistry",
    category: "Japanese Tattoos",
    contestants: 10,
    image: "URL to competition image 5"
  },
  {
    remainingTime: 1685551385,
    description: "Unveil your dark and gothic side through the realm of horror-inspired tattoos.",
    competitionName: "Dark Inked Tales",
    category: "Horror Tattoos",
    contestants: 8,
    image: "URL to competition image 6"
  },
  {
    remainingTime: 1685292185,
    description: "Express your love for nature with breathtaking botanical tattoos in this competition.",
    competitionName: "Floral Masterstrokes",
    category: "Botanical Tattoos",
    contestants: 15,
    image: "URL to competition image 7"
  },
  {
    remainingTime: 1685205785,
    description: "Embrace the beauty of minimalism in this competition dedicated to minimalist tattoos.",
    competitionName: "Less is More",
    category: "Minimalist Tattoos",
    contestants: 10,
    image: "URL to competition image 8"
  },
  {
    remainingTime: 1685205785,
    description: "Celebrate cultural diversity with striking tribal tattoos in this global-inspired competition.",
    competitionName: "Tribal Fusion",
    category: "Tribal Tattoos",
    contestants: 12,
    image: "URL to competition image 9"
  },
  {
    remainingTime: 1685205785,
    description: "Join us for the fierce battle of watercolor tattoos and witness the beauty of fluid art.",
    competitionName: "Watercolor Waves",
    category: "Watercolor Tattoos",
    contestants: 15,
    image: "URL to competition image 10"
  }
];

const enterCompetition = () => {
  console.log('Enter the competition!')
}

const judgeCompetition = () => {
  console.log('judgecompetition')
}

const viewResults = () =>{

}

export default function Competitions() {
  return (
      <View style={styles.container}>
          <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container2}>
            {competitions.map((i, index) => (
              <CompetitionCard
                {...i}
                key={index}
              />
            ))}
          </ScrollView>
      </View>
  );
}
