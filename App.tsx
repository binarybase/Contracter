import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/context/appContext';
import ContractsNavigator from './src/navigator/ContractsNavigator';
import { Navigators } from './src/constants';
import { TRootStackParamsList } from './src/types/navigation';
import { database } from './src/database';
import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider'

// create stack navigator which handles all nav actions within app
const Stack = createNativeStackNavigator<TRootStackParamsList>();

// main App component
const App = (): JSX.Element => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<AppContextProvider>
				<DatabaseProvider database={database}>
				<GluestackUIProvider config={config}>
				<Stack.Navigator screenOptions={{
					headerShown: false
				}}>
					<Stack.Screen
						component={ContractsNavigator} 
						name={Navigators.Contracts}
					/>
				</Stack.Navigator>
				</GluestackUIProvider>
				</DatabaseProvider>
				</AppContextProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
