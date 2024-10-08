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
} from "native-base";
import React from "react";
import FormRegister from "../../../components/FormRegister";

import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";

export default function AgePafe() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Box w="90%" maxW="400">
          <Progress value={45} mx="4" />
        </Box>
        {/* <FormRegister /> */}
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
