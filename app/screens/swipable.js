import React, { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SwipeableFlatList from "react-native-swipeable-list";
import colors from "../config/colors";

const darkColors = {
  background: "#121212",
  primary: "#BB86FC",
  primary2: "#3700b3",
  secondary: "#03DAC6",
  onBackground: "#FFFFFF",
  error: "#CF6679",
};

const colorEmphasis = {
  high: 0.87,
  medium: 0.6,
  disabled: 0.38,
};

const extractItemKey = (item) => {
  return item.id.toString();
};

const Item = ({ item, backgroundColor, textColor, deleteItem }) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.avatar}></View>
        <View style={styles.messageContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {item.date}
          </Text>
          <Text style={styles.text} numberOfLines={2}>
            {item.task}
          </Text>
        </View>
      </View>
      <View />
    </>
  );
};

function renderItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

const Swipe = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([
    { id: 1, date: "232-23-2", task: "task1" },
    { id: 2, date: "232-23-2", task: "task2" },
    { id: 3, date: "232-23-2", task: "task3" },
  ]);

  const deleteItem = (itemId) => {
    // ! Please don't do something like this in production. Use proper state management.
    const newState = [...data];
    const filteredState = newState.filter((item) => item.id !== itemId);
    return setData(filteredState);
  };

  const archiveItem = (itemId) => {
    Alert.alert(
      "DISHONESTY ALERT",
      "Not gonna Archive it. We're actually are gonna just delete it.",
      [
        {
          text: "Just delete it?",
          onPress: () => deleteItem(itemId),
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );
  };

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.button, styles.button1]}>
          <Pressable onPress={() => archiveItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.button3]}>
          <Pressable onPress={() => deleteItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Tasks</Text>
        </View>
        <SwipeableFlatList
          keyExtractor={extractItemKey}
          data={data}
          renderItem={({ item }) => (
            <Item item={item} deleteItem={() => deleteItem} />
          )}
          maxSwipeDistance={240}
          renderQuickActions={({ index, item }) => QuickActions(index, item)}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={true}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryfaded,
  },
  headerContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "800",
    color: colors.primary,
    opacity: colorEmphasis.high,
  },
  item: {
    backgroundColor: colors.primaryfaded,
    height: 80,
    flexDirection: "row",
    padding: 10,
  },
  messageContainer: {
    backgroundColor: darkColors.backgroundColor,
    maxWidth: 300,
  },
  name: {
    fontSize: 12,
    color: colors.primary,
    opacity: colorEmphasis.high,
    fontWeight: "800",
  },
  text: {
    fontSize: 16,
    color: colors.black,
    opacity: colorEmphasis.medium,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    opacity: colorEmphasis.high,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 7,
    alignSelf: "center",
    shadowColor: colors.secondary,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: colorEmphasis.high,
  },
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.primary,
    opacity: colorEmphasis.medium,
  },
  qaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    opacity: colorEmphasis.high,
  },
  button1Text: {
    color: darkColors.primary,
  },
  button2Text: {
    color: darkColors.secondary,
  },
  button3Text: {
    color: darkColors.error,
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: darkColors.backgroundColor,
  },
});

export default Swipe;
