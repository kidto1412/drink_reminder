import { StyleSheet, View } from "react-native";
import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  NativeBaseProvider,
  Image,
  Text,
  Stack,
  Center,
  Heading,
  HStack,
  IconButton,
  Avatar,
  Icon,
  VStack,
} from "native-base";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function Home() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Box
          height={"md"}
          width={"full"}
          maxWidth={"full"}
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Center>
                <AnimatedCircularProgress
                  size={200}
                  width={15}
                  fill={100}
                  tintColor="#00e0ff"
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  backgroundColor="#3d5875"
                />
                <Text fontWeight="400">0</Text>
                <Text fontWeight="400">/2500 mL</Text>
                <HStack space={2} alignItems={"center"}>
                  <VStack mt={5}>
                    <Button size={"md"} colorScheme="primary">
                      Drink
                    </Button>
                  </VStack>
                  <VStack mt={5}>
                    <Avatar
                      size={"md"}
                      alignContent={"center"}
                      alignItems={"center"}
                      alignSelf={"center"}
                      bg="blue.100"
                      source={{
                        uri: "https://bit.ly/broken-link",
                      }}
                    >
                      <Icon as={FontAwesome} name="coffee"></Icon>
                    </Avatar>
                  </VStack>
                </HStack>
              </Center>
            </Stack>
          </Stack>
        </Box>

        {/* History Section */}
        <Box
          height={"1/3"}
          mt={5}
          width={"full"}
          maxWidth={"full"}
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Stack p="4" space={3}>
            <Stack space={2}>
              <HStack justifyContent={"space-between"}>
                <Heading>History</Heading>
                <Button variant={"link"}>View All</Button>
              </HStack>
              <Center>
                <Icon as={FontAwesome} name="file" size={"6xl"}></Icon>
                <Text mt={5}>
                  You don't have no history of water intake today.
                </Text>
              </Center>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
