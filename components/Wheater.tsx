import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  NativeBaseProvider,
  Stack,
  WarningOutlineIcon,
  Text,
  Progress,
  Icon,
  HStack,
  Avatar,
  Badge,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";

import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
// import ManImage from '@/assets/images/man.png'
const styles = StyleSheet.create({
  timePicker: {
    width: "100%",
  },
});
export default function Wheather() {
  return (
    <Box>
      <Box mx={4} mb={3} mt={10}>
        <Center>
          <Heading textAlign={"center"}>
            What's the climate/wheater like in your area?
          </Heading>
          <Text
            textAlign={"center"}
            width={"xs"}
            fontSize="md"
            color={"gray.500"}
            mt={"3"}
          >
            External factors like weather can influence your hydration needs.
            Let us know the current climate in your area.
          </Text>
          <Box
            borderWidth="1"
            borderColor="coolGray.200"
            borderRadius={"md"}
            mt={5}
            width="100%"
            p={5}
          >
            <HStack alignItems={"center"}>
              <Box>
                <Image
                  source={require("@/assets/images/sunny.png")}
                  size={"50px"}
                ></Image>
              </Box>
              <Box ml={5} pr={5}>
                <Text>Hot</Text>
              </Box>
            </HStack>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
