import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen.js";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import MyComponent from "./src/screens/BottomNavigation";
import JBMComponent from "./src/screens/JBMLayout";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen : ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Bottom: MyComponent,
    JackBeNimble: JBMComponent
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "JackBeNimble",
    },
  }
);

console.log("App.js")
export default createAppContainer(navigator);
