import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";
import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  NativeBaseProvider,
} from "native-base";
// import { LineChart } from "react-native-chart-kit";

export default function Report() {
  const data = [
    {
      value: 2500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Jan",
    },
    { value: 2400, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 3500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Feb",
    },
    { value: 3000, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 4500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Mar",
    },
    { value: 4000, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 5200,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Apr",
    },
    { value: 4900, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },

    {
      value: 3000,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "May",
    },
    { value: 2800, frontColor: "#3BE9DE", gradientColor: "#93FCF8" },
  ];

  const lineData = [
    { value: 160, date: "1 Apr 2022" },
    { value: 180, date: "2 Apr 2022" },
    { value: 190, date: "3 Apr 2022" },
    { value: 180, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 145, date: "6 Apr 2022" },
    { value: 160, date: "7 Apr 2022" },
    { value: 200, date: "8 Apr 2022" },

    { value: 220, date: "9 Apr 2022" },
    {
      value: 240,
      date: "10 Apr 2022",
      label: "10 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 280, date: "11 Apr 2022" },
    { value: 260, date: "12 Apr 2022" },
    { value: 340, date: "13 Apr 2022" },
    { value: 385, date: "14 Apr 2022" },
    { value: 280, date: "15 Apr 2022" },
    { value: 390, date: "16 Apr 2022" },

    { value: 370, date: "17 Apr 2022" },
    { value: 285, date: "18 Apr 2022" },
    { value: 295, date: "19 Apr 2022" },
    {
      value: 300,
      date: "20 Apr 2022",
      label: "20 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 280, date: "21 Apr 2022" },
    { value: 295, date: "22 Apr 2022" },
    { value: 260, date: "23 Apr 2022" },
    { value: 255, date: "24 Apr 2022" },

    { value: 190, date: "25 Apr 2022" },
    { value: 220, date: "26 Apr 2022" },
    { value: 205, date: "27 Apr 2022" },
    { value: 230, date: "28 Apr 2022" },
    { value: 210, date: "29 Apr 2022" },
    {
      value: 200,
      date: "30 Apr 2022",
      label: "30 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 240, date: "1 May 2022" },
    { value: 250, date: "2 May 2022" },
    { value: 280, date: "3 May 2022" },
    { value: 250, date: "4 May 2022" },
    { value: 210, date: "5 May 2022" },
  ];

  return (
    <NativeBaseProvider>
      <Box backgroundColor={"gray.300"} height={"full"}>
        <Box
          justifyContent="center"
          alignItems="center"
          backgroundColor={"white"}
        >
          {/* Button Group */}
          <HStack alignItems="center">
            <Button backgroundColor={"blue.500"} variant="solid">
              Weekly
            </Button>
            <Button colorScheme="secondary" variant="outline">
              Monthly
            </Button>
            <Button colorScheme="danger" variant="outline">
              Yearly
            </Button>
          </HStack>
        </Box>
        <Box
          backgroundColor={"white"}
          style={{ marginHorizontal: 20, alignItems: "center", marginTop: 10 }}
          borderRadius={10}
        >
          <Heading>Drink Compilation</Heading>
          <BarChart
            data={data}
            barWidth={16}
            initialSpacing={10}
            spacing={14}
            barBorderRadius={4}
            showGradient
            yAxisThickness={0}
            xAxisType={"dashed"}
            xAxisColor={"gray"}
            yAxisTextStyle={{ color: "gray" }}
            stepValue={1000}
            maxValue={6000}
            noOfSections={6}
            yAxisLabelTexts={["0", "1k", "2k", "3k", "4k", "5k", "6k"]}
            labelWidth={40}
            xAxisLabelTextStyle={{ color: "gray", textAlign: "center" }}
          />
        </Box>
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
            backgroundColor: "white",
            marginHorizontal: 24,
            borderRadius: 10,
          }}
        >
          <Heading>Hydrate</Heading>
          <LineChart
            areaChart
            data={lineData}
            rotateLabel
            width={300}
            hideDataPoints
            spacing={10}
            color="#00ff83"
            thickness={2}
            startFillColor="#0D92F4"
            endFillColor="#0D92F4"
            startOpacity={0.9}
            endOpacity={0.2}
            initialSpacing={0}
            noOfSections={6}
            maxValue={600}
            yAxisColor="white"
            yAxisThickness={0}
            hideRules
            yAxisTextStyle={{ color: "gray" }}
            xAxisColor="lightgray"
            pointerConfig={{
              pointerStripHeight: 160,
              pointerStripColor: "lightgray",
              pointerStripWidth: 2,
              pointerColor: "lightgray",
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 90,
              activatePointersOnLongPress: true,
              autoAdjustPointerLabelPosition: false,
              pointerLabelComponent: (items: any) => {
                return (
                  <View
                    style={{
                      height: 90,
                      width: 100,
                      justifyContent: "center",
                      marginTop: -30,
                      marginLeft: -40,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        marginBottom: 6,
                        textAlign: "center",
                      }}
                    >
                      {items[0].date}
                    </Text>

                    <View
                      style={{
                        paddingHorizontal: 14,
                        paddingVertical: 6,
                        borderRadius: 16,
                        backgroundColor: "white",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                        {"$" + items[0].value + ".0"}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
        </View>
      </Box>
    </NativeBaseProvider>
  );
}
