import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import { user } from "../data/Profile";
import Cadastro from "../screens/Cadastro";
import Perfils from "../screens/Perfils";
import QuemSomos from "../screens/QuemSomos";
import Paraolimpiadas from "../screens/Paraolimpiadas";
import Proteses from "../screens/Proteses";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {

  <Image source={require('../../assets/logo.png')}
    onPress={() => Navigation.navigate("Vanguardht")}
    style={{
      width: 30, height: 30, marginTop: 50, marginBottom: 45,
      width: 250, height: 70, marginLeft: 15,
    }} />

  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              style={{
                width: 300, height: 50, resizeMode: 'contain', alignSelf: 'center',
                marginTop: 50, marginBottom: 45, marginRight: 50,
              }}
              source={require('../../assets/logo.png')}
            />
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{ user }}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Usuário",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Category"
        component={Category}
        initialParams={{ data: user }}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Categorias",
          drawerItemStyle: { height: 0 },
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        initialParams={{ data: user }}
        options={{
          headerTitle: "NewEarth",
          drawerIcon: ({ focused }) => (
            <Feather
              name="plus"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Cadastro",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Quem Somos"
        component={QuemSomos}
        options={{
          headerTitle: "NewEarth",
          drawerIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Quem Somos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Perfils"
        component={Perfils}
        options={{
          headerTitle: "NewEarth",
          drawerIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />

          ),
          drawerLabel: "Perfil do Criador",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="Paraolimpiadas"
        component={Paraolimpiadas}
        options={{
          headerTitle: "NewEarth",
          drawerIcon: ({ focused }) => (
            <Feather
              name="heart"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />

          ),
          drawerLabel: "Paraolimpiadas",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
       <Drawer.Screen
        name="Proteses"
        component={Proteses}
        options={{
          headerTitle: "NewEarth",
          drawerIcon: ({ focused }) => (
            <Feather
              name="slack"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />

          ),
          drawerLabel: "Nossas Próteses",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
    </Drawer.Navigator>

  );
};

export default DrawerRoutes;
