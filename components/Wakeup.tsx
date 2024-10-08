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
export default function Wakeup() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode]: any = useState("time");
  const [show, setShow] = useState(true);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(true);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <Box>
      <Box mx={4} mb={3} mt={10}>
        <Center>
          <Heading textAlign={"center"}>
            What time do you usually wakeup?
          </Heading>
          <Text
            textAlign={"center"}
            width={"xs"}
            fontSize="md"
            color={"gray.500"}
            mt={"3"}
          >
            Your wakeup time helps us tailor your hydration schedule. Pick your
            waking hour.
          </Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="spinner"
          />
          {show && <Box mt={5}></Box>}
          <Text mt={5}>selected: {date.toLocaleTimeString()}</Text>
        </Center>
      </Box>
    </Box>
  );
}
