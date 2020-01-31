import React from "react";
import { SafeAreaView, View, Text } from "react-native";

interface Example {
  name: string;
}

type Props = Example;

const Main: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Main;
