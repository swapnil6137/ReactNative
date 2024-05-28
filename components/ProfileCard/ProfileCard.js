import { View, Text, Image } from "react-native";
import { s } from "./ProfileCard.style";

export function ProfileCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          ></Image>
        </View>
        <View style={s.texts}>
          <Text style={s.name}>Swapnil Shinde</Text>
          <Text>
            I am react developer kjdhjashdjkhas kasdhsajkdhjkas kjahdhajskhdj
          </Text>
        </View>
      </View>
    </View>
  );
}
