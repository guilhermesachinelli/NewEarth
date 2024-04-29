import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Perfils from "../screens/Perfils";
import QuemSomos from "../screens/QuemSomos";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Quem Somos" component={QuemSomos} />
      <Stack.Screen name="Perfils" component={Perfils} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
