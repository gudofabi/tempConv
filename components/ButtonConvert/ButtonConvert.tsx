import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";

interface props {
  unit: String;
  onPress: () => void;
}

export function ButtonConvert({ unit, onPress }: props) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
