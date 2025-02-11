import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { s } from "./index.style";

import hotBackground from "@/assets/images/hot.png";
import coldBackground from "@/assets/images/cold.png";

import { UNITS, getOppositeUnit, convertTempTo, isIceTemp } from "@/utils/temp";

// components
import { Input } from "@/components/Input/input";
import { useEffect, useState } from "react";
import { DisplayTemp } from "@/components/DisplayTemp/DisplayTemp";
import { ButtonConvert } from "@/components/ButtonConvert/ButtonConvert";
import { useNavigation } from "expo-router";

export default function Index() {
  const nav = useNavigation();
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBG, setCurrentBG] = useState(coldBackground);

  useEffect(() => {
    nav.setOptions({ headerShown: false });
  }, [nav]);

  // use effect that watch inputValue and currentUnit
  useEffect(() => {
    const isCold = isIceTemp(inputValue, currentUnit); // check if it's cold
    setCurrentBG(isCold ? coldBackground : hotBackground); // set current bg based on isCold variable
  }, [inputValue, currentUnit]);

  // FUNCTIONS
  const func_getOppositeUnit = getOppositeUnit(currentUnit);

  const func_getConvertedTemp = () => {
    if (isNaN(inputValue)) {
      return "--";
    } else {
      return convertTempTo(inputValue, func_getOppositeUnit).toFixed(1);
    }
  };

  return (
    <ImageBackground style={s.backgroundImg} source={currentBG}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workplace}>
            <DisplayTemp
              unit={func_getOppositeUnit}
              temperature={func_getConvertedTemp()}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConvert
              unit={currentUnit}
              onPress={() => {
                setCurrentUnit(func_getOppositeUnit);
              }}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
