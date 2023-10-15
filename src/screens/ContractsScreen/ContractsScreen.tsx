import React from "react"
import ContractsListView from "./ContractsListView"
import { ContractsProvider } from "../../context/contractsContext";
import { StyleSheet } from "react-native"
import { Button, ButtonIcon, Icon, View } from "@gluestack-ui/themed";
import { PlusCircleIcon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../constants";
import { TContractsNavigationProp } from "../../types/navigation";
import BottomActionButtons from "../../components/BottomActionButtons";

const ContractsScreen = (): JSX.Element => {
	const navigation = useNavigation<TContractsNavigationProp>();
	const onPlusButtonPress = () => {
		navigation.navigate(Routes.ContractsEditForm);
	}

	return (
		<ContractsProvider>
			<ContractsListView style={style.view} />
			<BottomActionButtons>
				<Button action="primary" variant="link" size="xl" onPress={onPlusButtonPress}>
					<ButtonIcon as={PlusCircleIcon} size="xl" />
				</Button>
			</BottomActionButtons>
		</ContractsProvider>
	)
}

const style = StyleSheet.create({
	view: {
		flex: 1
	}
})

export default ContractsScreen;