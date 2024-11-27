import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { theme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  books: BookType[];
};

const AllNotes = ({ books }: Props) => {
  const colorScheme = useColorScheme();

  const RenderItems = ({ item }: any) => {
    return (
      <Link href={`/noteDetails/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.imgBox}>
              <Image
                style={styles.image}
                source={{ uri: item.image || "fallback-image-uri" }}
              />
            </View>
            <View style={styles.txtBox}>
              <View style={styles.upperTxt}>
                <Text style={[theme.typography.head3, styles.name]}>
                  {item.name}
                </Text>
                <Text style={theme.typography.caption}>by {item.author}</Text>
              </View>
              <View style={styles.lowerTxt}>
                <View style={styles.detIcon}>
                  <Ionicons
                    name="download-outline"
                    size={15}
                    color={theme.colors.gray[500]}
                  />
                  <Text style={theme.typography.caption}>
                    {item.download > 1000
                      ? (item.download / 1000).toFixed(1) + "k"
                      : item.download.toString()}
                  </Text>
                </View>
                <View style={styles.detIcon}>
                  <Ionicons
                    name="eye-outline"
                    size={15}
                    color={theme.colors.gray[500]}
                  />
                  <Text style={theme.typography.caption}>
                    {item.reviews > 1000
                      ? (item.reviews / 1000).toFixed(1) + "k"
                      : item.reviews.toString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <FlatList
      data={books}
      keyExtractor={(item) =>
        item.id?.toString() || `${item.name}-${item.author}`
      }
      renderItem={({ item }) => <RenderItems item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AllNotes;

const styles = StyleSheet.create({
  item: {
    // backgroundColor: theme.colors.error,
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
  },
  imgBox: {
    width: 101,
    height: 133,
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: theme.borderRadius.sm,
    resizeMode: "cover",
  },
  txtBox: {
    flexDirection: "column",
    flex: 1,
    marginHorizontal: 5,
  },
  upperTxt: {
    marginBottom: 10,
  },
  lowerTxt: {
    flexDirection: 'row',
    gap: 10,
  },
  name: {
    fontWeight: "600",
  },
  author: {
    fontSize: 10,
    fontWeight: "300",
    color: theme.colors.text.secondary,
  },
  detIcon: {
    flexDirection: "row", gap: 5, marginRight: 5
  }
});
