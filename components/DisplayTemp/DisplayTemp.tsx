import { TextInput, View, Text } from "react-native";
import { s } from "./DisplayTemp.style";

interface props {
  temperature: String | Number;
  unit: String;
}

export function DisplayTemp({ temperature, unit }: props) {
  return (
    <View style={s.root}>
      <Text style={s.tempText}>{temperature.toString()}</Text>
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
