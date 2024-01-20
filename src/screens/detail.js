import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import YoutubeFrame from "react-native-youtube-iframe";
import axios from "axios";

export const MovieDetail = ({ route }) => {
  const [movie, setMovie] = useState({});
  const [playing, setPlaying] = useState(false);
  const [playText, setPlayText] = useState("Play");
  const [playIcon, setPlayIcon] = useState("play");
  const [videoKey, setVideoKey] = useState([]);

  useEffect(() => {
    setMovie(route.params);
    loadVideo();
  }, [movie]);

  const loadVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US`
    );
    setVideoKey(data.results[0].key);
    console.log('Video Key : ', data);
  };

  return (
    <View
      style={{
        backgroundColor: "#27272a",
      }}   >
      <StatusBar backgroundColor="transparent" style="light" />
      <ImageBackground
        resizeMode="cover"
        imageStyle={{
          height: 300,
          opacity: 0.4,
          backgroundColor: "transparent",
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }} >
        {!videoKey? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {!playing ? (
              <Image
                style={{
                  marginTop: 30,
                  width: 380,
                  height: 320,
                }}
                resizeMode="contain"
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
              />
            ) : (
              <View style={{ marginTop: 30, padding: 5 }}>
                <YoutubeFrame
                  videoId={videoKey}
                  width={350}
                  height={230}

                />
              </View>
            )}
          </>
        )}

        <View
          style={{
            backgroundColor: "#27272a",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: "100%",
            padding: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>{movie.title}</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="star" size={15} color="gold" />
              <Text style={{ color: "white" }}>{movie.vote_average}</Text>
            </View>
            <View style={{ marginLeft: 15, flexDirection: "row" }}>
              <AntDesign name="like1" size={15} color="gold" />
              <Text style={{ color: "white" }}>{movie.vote_count}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "gold",
              height: 40,
              flexDirection: "row",
              borderRadius: 5,
              alignContent: "center",
              justifyContent: "center",
              marginTop: 30,
              paddingVertical: 8,
            }}
            onPress={() => {
              setPlaying(true);
            }}
          >
            <Feather name="play" size={20} color="black" />

            <Text style={{ fontSize: 17 }}>Play</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              marginHorizontal: 16,
              marginTop: 20,
            }}
          >
            
            <TouchableOpacity
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "black",
                paddingVertical: 8,
                paddingHorizontal: 15,
                borderRadius: 6,
                width: 150,
              }}
              onPress={() => Linking.openURL(`https://api.whatsapp.com/send?text=Check%20out%20this%20trailer%20YouTube%20https://www.youtube.com/watch?v=${videoKey}`)}
            >
              <Entypo name="share" size={20} color="gold" />

              <Text style={{ color: "white" }}> Share</Text>
            </TouchableOpacity>
            <Pressable
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "black",
                paddingVertical: 8,
                paddingHorizontal: 15,
                borderRadius: 6,
                width: 150,
              }}
            >
              <Feather name="download" size={21} color="gold" />
              <Text style={{ color: "white" }}> Download</Text>
            </Pressable>
          </View>
          <Text style={{ color: "white", marginTop: 20 }}>
            {movie.overview}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
