import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

class Notes extends Component {
  state = {
    // Sample data
    items: [
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   1",
        price: "10",
        id: 1,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   2",
        price: "20",
        id: 2,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   3",
        price: "30",
        id: 3,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   4",
        price: "40",
        id: 4,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   5",
        price: "50",
        id: 5,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   6",
        price: "60",
        id: 6,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   7",
        price: "70",
        id: 7,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   8",
        price: "80",
        id: 8,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   9",
        price: "90",
        id: 9,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   10",
        price: "100",
        id: 10,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   11",
        price: "110",
        id: 11,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   12",
        price: "120",
        id: 12,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   13",
        price: "130",
        id: 13,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   14",
        price: "140",
        id: 14,
      },
      {
        item: "Item some additional info and some other more. Thats cool indeed alaaaaahh   15",
        price: "150",
        id: 15,
      },
    ],
  };
  render() {
    return (
      <View style={styles.screen}>
        <ScrollView>
          {this.state.items.map((item, index) => (
            <View key={item.id}>
              <ScrollView>
                {/* <ScrollView horizontal={true}> */}
                <View style={styles.summary}>
                  <Text style={styles.summaryText}>
                    <Text>On {item.price} </Text>
                    <Text style={styles.amount}>{item.item}</Text>
                  </Text>
                </View>
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

// Screen styles
const styles = StyleSheet.create({
  screen: {
    margin: 10,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    // fontFamily: "openSansBold",
    fontSize: 18,
  },
  amount: {
    color: "darkgray",
  },
});
export default Notes;
