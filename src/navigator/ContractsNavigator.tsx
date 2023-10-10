import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { contractsAddTitleText, contractsTitleText } from "../messages";
import ContractsScreen from "../screens/ContractsScreen/ContractsScreen";
import EditFormScreen from "../screens/ContractsScreen/EditFormScreen";
import { ContractsStackParamsList } from "../types/navigation";
import { Routes } from "../constants";

/**
 * this component contains basic contracts navigator
 * it can switch between listView, formControl, etc.
 */

const Stack = createNativeStackNavigator<ContractsStackParamsList>();
const ContractsNavigator = (): JSX.Element => (
	<Stack.Navigator screenOptions={{
		headerLargeTitle: true
	}}>
		<Stack.Screen
			name={Routes.ContractsHome}
			component={ContractsScreen}
			options={{
				headerTitle: contractsTitleText
			}}
		/>
		<Stack.Screen
			name={Routes.ContractsEditForm}
			component={EditFormScreen}
		/>
	</Stack.Navigator>
)

export default ContractsNavigator;