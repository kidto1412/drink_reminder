import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  NativeBaseProvider,
  Spacer,
  VStack,
} from "native-base";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesome } from "@expo/vector-icons";

export default function History() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <NativeBaseProvider>
      <Box width={"full"} backgroundColor={"white"}>
        <HStack
          alignContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
          space={7}
        >
          {days.map((day) => {
            return (
              <Center>
                <Text style={{ marginTop: 5 }}>{day}</Text>

                <AnimatedCircularProgress
                  style={{ marginBottom: 10, marginTop: 5 }}
                  size={30}
                  width={5}
                  fill={50}
                  tintColor="#00e0ff"
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  backgroundColor="grey"
                />
              </Center>
            );
          })}
        </HStack>
      </Box>
      <Text style={{ marginLeft: 10, marginBottom: 10, marginTop: 10 }}>
        {" "}
        Today, Dec 22, 2024
      </Text>
      <Box backgroundColor={"white"} ml={5} mr={5} borderRadius={"md"}>
        <Box p={5}>
          <HStack space={3} alignContent={"center"} alignItems={"center"}>
            <VStack>
              <Icon
                as={FontAwesome}
                name="coffee"
                size={"2xl"}
                color={"blue.400"}
              ></Icon>
            </VStack>
            <VStack space={2}>
              <Heading>Water</Heading>
              <Text style={{ color: "grey" }}> 15:00 Pm</Text>
            </VStack>
            <Spacer />
            <VStack>
              <Text> 300ml</Text>
            </VStack>
          </HStack>
          <Center>
            <Divider
              mt={5}
              width={"full"}
              _light={{
                bg: "grey",
              }}
              _dark={{
                bg: "grey",
              }}
            />
          </Center>
        </Box>
        <Box p={5}>
          <HStack space={3} alignContent={"center"} alignItems={"center"}>
            <VStack>
              <Icon
                as={FontAwesome}
                name="coffee"
                size={"2xl"}
                color={"blue.400"}
              ></Icon>
            </VStack>
            <VStack space={2}>
              <Heading>Water</Heading>
              <Text style={{ color: "grey" }}> 15:00 Pm</Text>
            </VStack>
            <Spacer />
            <VStack>
              <Text> 300ml</Text>
            </VStack>
          </HStack>
          <Center>
            <Divider
              mt={5}
              width={"full"}
              _light={{
                bg: "grey",
              }}
              _dark={{
                bg: "grey",
              }}
            />
          </Center>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
