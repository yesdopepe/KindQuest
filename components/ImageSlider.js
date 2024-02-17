import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text
} from "react-native";

// Default Sample Data
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "The most beutiful railway track!",
    subtitle:
      "This is a long subtitle. Which also can be used to display flashnews.",
    image:
      "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Memories lives in this home",
    subtitle:
      "This is a long subtitle. Which also can be used to display flashnews.",
    image:
      "https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Snow and Fun! How can we forget",
    subtitle:
      "This is a long subtitle. Which also can be used to display flashnews.",
    image:
      "https://i.picsum.photos/id/971/700/500.jpg?hmac=kNTldtPvd24NEOfvd39iwsRBun4As0dYChiWQuyCFo4",
  },
];

// Default Props
const defaults = {
  height: 200,
  width: Dimensions.get("window").width,
  delay: 5000,
};

// Default Image Item
const Item = ({ title, image, height, width, onPress, subtitle }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.imageContainer, { height: height, width: width }]}
  >
    <Image source={{ uri: image }} style={[styles.image, { height: height }]} />
    <View style={styles.titleContainer}>
      {title && <Text style={styles.title}>{title} </Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  </TouchableOpacity>
);

// Default On Press Action
const handlePress = (item) => {
  console.log("Pressed", item.id);
};

// Carousal Component
export default function Carousal({
  data = DATA,
  height = defaults.height,
  width = defaults.width,
  delay = defaults.delay,
  onPress = handlePress,
  ItemElement = Item,
}) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const scrollView = useRef();

  // Script which will only executed when component initilizes
  useEffect(() => {
    const fn = setInterval(() => {
      setselectedIndex((oldCount) =>
        oldCount === data.length - 1 ? 0 : oldCount + 1
      );
    }, delay);
    return () => {
      clearInterval(fn);
    };
  }, []);

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setIndex}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.carousalContainer}>
          {data.map((item) => (
            <ItemElement
              key={item.id}
              height={height}
              width={width}
              {...item}
              onPress={() => onPress(item)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carousalContainer: {
    flexDirection: "row",
    width: "100%",
  },
  imageContainer: { backgroundColor: "yellow" },
  item: {
    backgroundColor: "rgba(91, 91, 91, 0.3)",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: "bold",
  },
  subtitle: {
    color: '#fff',
  },
  image: {
    width: defaults.width,
    height: defaults.height,
  },
});