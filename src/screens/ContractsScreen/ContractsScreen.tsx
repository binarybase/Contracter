import React from "react"
import ContractsListView from "./ContractsListView"
import { ContractsProvider } from "../../context/contractsContext";
import { StyleSheet } from "react-native"
import { Button, Icon, View } from "@gluestack-ui/themed";
import { PlusCircleIcon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../constants";
import { ContractsNavigationProp } from "../../types/navigation";

const ContractsScreen = (): JSX.Element => {
	const navigation = useNavigation<ContractsNavigationProp>();
	const onPlusButtonPress = () => {
		navigation.navigate(Routes.ContractsEditForm);
	}

	return (
		<ContractsProvider>
			<ContractsListView style={style.view} />
			<View
				backgroundColor="$backgroundLight0" borderTopColor="$backgroundLight300"
				borderTopWidth={1}
			>
				<Button variant="link" size="xl" onPress={onPlusButtonPress}>
					<Icon as={PlusCircleIcon} size="xl" />
				</Button>
			</View>
		</ContractsProvider>
	)
}

const style = StyleSheet.create({
	view: {
		flex: 1
	}
})

export default ContractsScreen;