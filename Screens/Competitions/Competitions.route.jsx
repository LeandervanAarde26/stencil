import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Competitions.styles";
import Buttn from "../../Components/Button/Button.component";
import CompetitionCard from "../../Components/CompetitionCard/CompetitionCard.component";

const competitions = [
  {
    remainingTime: 1685269144,
    description: "Join the ultimate tattoo showdown and let your art speak for itself!",
    competitionName: "Inked Masterpiece",
    category: "Realism Tattoos",
    contestants: 20,
    image: "https://www.pngfind.com/pngs/m/184-1848579_free-png-wolf-girl-tattoo-designs-png-image.png"
  },
  {
    remainingTime: 1685355544,
    description: "Unleash your creativity and imagination in this fantasy-themed tattoo competition.",
    competitionName: "Fantastical Ink Fest",
    category: "Fantasy Tattoos",
    contestants: 15,
    image: "https://www.pngfind.com/pngs/m/184-1848579_free-png-wolf-girl-tattoo-designs-png-image.png"
  },
  {
    remainingTime: 1685551385,
    description: "Showcase your expertise in this black and grey tattoo challenge.",
    competitionName: "Shades of Gray",
    category: "Black and Grey Tattoos",
    contestants: 12,
    image: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-oldschool-tattoo-manuscript-rose-image_1262073.jpg"
  },
  {
    remainingTime: 1685551385,
    description: "Show off your vibrant and colorful tattoos in this electrifying ink extravaganza.",
    competitionName: "Color Explosion",
    category: "Neo-Traditional Tattoos",
    contestants: 18,
    image: "https://png.pngtree.com/element_our/sm/20180515/sm_930d88ac10fafcb133c4b2027446648b.png"
  },
  {
    remainingTime: 1685551385,
    description: "Experience the artistry of Japanese tattoos in this traditional Irezumi competition.",
    competitionName: "Irezumi Artistry",
    category: "Japanese Tattoos",
    contestants: 10,
    image: "https://png.pngtree.com/png-vector/20190925/ourmid/pngtree-japan-koi-fish-illustration-vector-in-tattoo-style-png-image_1733191.jpg"
  },
  {
    remainingTime: 1685551385,
    description: "Unveil your dark and gothic side through the realm of horror-inspired tattoos.",
    competitionName: "Dark Inked Tales",
    category: "Horror Tattoos",
    contestants: 8,
    image: "https://png.pngtree.com/element_our/sm/20180515/sm_3ad87454c6cabee2420d5a610b7b644a.png"
  },
  {
    remainingTime: 1685292185,
    description: "Express your love for nature with breathtaking botanical tattoos in this competition.",
    competitionName: "Floral Masterstrokes",
    category: "Botanical Tattoos",
    contestants: 15,
    image: "https://www.pngfind.com/pngs/m/184-1848579_free-png-wolf-girl-tattoo-designs-png-image.png"
  },
  {
    remainingTime: 1685205785,
    description: "Embrace the beauty of minimalism in this competition dedicated to minimalist tattoos.",
    competitionName: "Less is More",
    category: "Minimalist Tattoos",
    contestants: 10,
    image: "https://www.pngfind.com/pngs/m/184-1848579_free-png-wolf-girl-tattoo-designs-png-image.png"
  },
  {
    remainingTime: 1685205785,
    description: "Celebrate cultural diversity with striking tribal tattoos in this global-inspired competition.",
    competitionName: "Tribal Fusion",
    category: "Tribal Tattoos",
    contestants: 12,
    image: "https://png.pngtree.com/png-clipart/20190217/ourmid/pngtree-tribal-lizard-iguana-temporary-tattoo-png-image_3997150.png"
  },
  {
    remainingTime: 1685205785,
    description: "Join us for the fierce battle of watercolor tattoos and witness the beauty of fluid art.",
    competitionName: "Watercolor Waves",
    category: "Watercolor Tattoos",
    contestants: 15,
    image: "https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-anchor-tattoo-illustration-png-image_1742457.jpg"
  }
];

export default function Competitions({navigation}) {

  const enterCompetition = (category) => {
    navigation.navigate("Enter", {category : category})
  }
  
  const judgeCompetition = () => {
    console.log('judgecompetition')
  }
  
  const viewResults = () =>{
  
  }



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
                navigation={() => enterCompetition(i.category)}
              />
            ))}
          </ScrollView>
      </View>
  );
}
