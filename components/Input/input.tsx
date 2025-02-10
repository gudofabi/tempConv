import { TextInput, View, Text } from "react-native";
import { s } from "./input.style";

interface props {
  defaultValue: Number;
  onChange: (value: any) => void;
  unit: String;
}

export function Input({ defaultValue, onChange, unit }: props) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={4}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={onChange}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
