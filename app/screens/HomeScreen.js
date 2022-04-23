import React from "react";
import {
  Image,
  Button,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import Swipe from "./swipable";
// import DateTimePicker from "@react-native-community/datetimepicker";

function HomeScreen() {
  const [text, setText] = React.useState("");
  // const [data, setData] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const save = () => {
    console.log(text);
    setText("");
  };
  const onPressFunction = () => {
    console.log("pressed");
  };
  return (
    <View style={globalStyle.container}>
      <View style={navabrStyles.navbar}>
        <Image
          style={navabrStyles.logo}
          source={require("../assets/icon.png")}
        />
        <Text style={navabrStyles.header}>Task Manager </Text>
      </View>
      <View style={bodyStyles.body}>
        <Button title="Open" onPress={() => setOpen(true)} />
        {/* <DateTimePicker
          modal
          mode="time"
          value={new Date()}
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
        {/* <DatePicker date={date} onDateChange={setDate} /> */}
        <View style={bodyStyles.input}>
          <TextInput
            style={bodyStyles.typin}
            placeholder="Type in task "
            onChange={(e) => setText(e.nativeEvent.text)}
            value={text}
          />
          <TouchableOpacity onPress={save} style={bodyStyles.button}>
            <Text style={bodyStyles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={bodyStyles.table}>
          <View style={bodyStyles.table}>
            <Swipe />
          </View>
        </View>
      </View>
      <View style={footerStyles.footer}>
        <Pressable onPress={onPressFunction}>
          <Text>New-Tasks </Text>
        </Pressable>
        <Pressable onPress={onPressFunction}>
          <Text>Done-Tasks</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const navabrStyles = StyleSheet.create({
  navbar: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    color: colors.secondary,
    backgroundColor: colors.primary,
  },
  logo: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 28,
  },
  header: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
});

const bodyStyles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
  input: {
    height: 100,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    marginTop: 5,
  },
  typin: {
    height: 50,
    width: "70%",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.primary,
  },
  table: {
    flex: 1,
    width: "100%",
  },
  mytasks: {
    color: colors.primary,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
  },
});
const footerStyles = StyleSheet.create({
  footer: {
    height: 50,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.primary,
  },
});
