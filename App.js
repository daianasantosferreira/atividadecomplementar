import * as React from 'react'; import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text> a Laura é uma pessoa que tem uns assuntos muito bons nos quais me indentifico com alguns</Text>
<Button
title="Adrielly"
onPress={() => navigation.navigate('Details')} />
</View>
 );
}


function DetailsScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>escolhi a drielly pois ela é uma pessoa muito gente boa e simpatica</Text>
<Button
title="Go to Details... again"
onPress={() => navigation.push('Details')}
/>
<Button title="Laura" onPress={() => navigation.navigate('Home')}  />
<Button title="Go back" onPress={() => navigation.goBack()} />
</View>
);
}







const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;


