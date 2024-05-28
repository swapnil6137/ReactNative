import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
// import { Profile } from "./components/Profile/Profile";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <ProfileCard />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>My First React native application!Woow</Text>
//       <StatusBar style="auto" />
//       <Text
//       title = "My Lable"/>
//     </View>
//   );
// }

/*
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>

     // <Text style = {{color: "#914747", fontSize : 16}}> Sample Text</Text>
      <Text style = {custStyle.title}> Sample Text</Text>
      <View style = {custStyle.square}>
        <Text style = {custStyle.innerTxt}> Super !  </Text>
         </View>
    <Profile></Profile>

      </SafeAreaView>
   
    </SafeAreaProvider>
  );
}
*/

// function onPressSubmit(){
//   print("Pressed")
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

/*
        <View style={{ backgroundColor: "blue", flex: 1 }}></View>
        <View style={{ backgroundColor: "green", flex: 2 }}></View>
        <View style={{ backgroundColor: "#78ab78", flex: 2 }}></View>
        <View style={{ backgroundColor: "#eaf3ea", flex: 2 }}></View>
*/

/*
// TO check flex and align items
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          // flexDirection: "row",
          // justifyContent: "center",
          // alignItems: "stretch",
          // alignItems: "flex-end",
        }}
      >

         <View style={s.box1}></View>
        <View style={s.box2}></View>
        <View style={s.box3}></View> 
        </SafeAreaView>
        </SafeAreaProvider>
      );
    }

*/
