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
  HStack,
  Icon,
  Flex,
} from "native-base";
import React, { useState } from "react";
// import FormRegister from "./form_register";

import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import FormRegister from "../../components/FormRegister";
import Gender from "@/components/Gender";
import { FontAwesome } from "@expo/vector-icons";
import Tall from "@/components/Tall";
import Weight from "@/components/Weight";
import Age from "@/components/Age";
import Wakeup from "@/components/Wakeup";
import Sleep from "@/components/Sleep";
import ActivityLevel from "@/components/ActivityLevel";
import Wheather from "@/components/Wheater";
import { router } from "expo-router";

export default function Index() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(10);

  function next() {
    if (step < 8) {
      setStep(step + 1);
      setProgress(progress + 12.5);
    } else {
      router.push("/pages/home");
    }
  }

  function back() {
    if (step > 1) {
      setStep(step - 1);
      setProgress(progress - 12.5);
    }
  }

  return (
    <NativeBaseProvider>
      <Box backgroundColor={"white"} width={"full"} height={"100%"}>
        <Box w="100%" maxW="100%" mb={4} mt={5}>
          <HStack alignItems="center">
            <Icon
              ml={5}
              as={FontAwesome}
              name="arrow-left"
              size={5}
              color={"blue"}
              onPress={back}
            />
            <Progress mx={5} value={progress} flex={1} size="sm" />
            <Text mr={"5"}>{step} / 8</Text>
          </HStack>
        </Box>
        {step == 1 ? (
          <Gender />
        ) : step == 2 ? (
          <Tall />
        ) : step == 3 ? (
          <Weight />
        ) : step == 4 ? (
          <Age />
        ) : step == 5 ? (
          <Wakeup />
        ) : step == 6 ? (
          <Sleep />
        ) : step == 7 ? (
          <ActivityLevel />
        ) : step == 8 ? (
          <Wheather />
        ) : (
          <div></div>
        )}

        <Box mx={4} mt={5}>
          <Button onPress={next}>Continue</Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
