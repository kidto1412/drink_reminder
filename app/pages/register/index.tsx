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
import FormRegister from "../../../components/FormRegister";
import Gender from "@/components/Gender";
import { FontAwesome } from "@expo/vector-icons";
import Tall from "@/components/Tall";
import Weight from "@/components/Weight";
import Age from "@/components/Age";
import Wakeup from "@/components/Wakeup";

export default function Index() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(10);

  function next() {
    if (step <= 8) {
      setStep(step + 1);
      setProgress(progress + 12.5);
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
        <Box w="90%" maxW="400" mb={4} mt={5}>
          <HStack space={5} alignItems="center">
            <Icon
              ml={"2"}
              as={FontAwesome}
              name="arrow-left"
              size={5}
              color={"blue"}
              onPress={back}
            />
            <Progress value={progress} flex={1} size="sm" />
            <Text>{step} / 8</Text>
          </HStack>
        </Box>
        {step == 1 ? (
          <FormRegister />
        ) : step == 2 ? (
          <Gender />
        ) : step == 3 ? (
          <Tall />
        ) : step == 4 ? (
          <Weight />
        ) : step == 5 ? (
          <Age />
        ) : step == 6 ? (
          <Wakeup />
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
