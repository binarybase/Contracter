import { FormControl } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ContractsEditFormRouteProp, ContractsNavigationProp } from "../../types/navigation";
import { useLayoutEffect } from "react";
import { contractsAddTitleText } from "../../messages";

/**
 * this screen contains editable form to create / edit contracts
 */
const EditFormScreen = (): JSX.Element => {
	const navigation = useNavigation<ContractsNavigationProp>();
	const route = useRoute<ContractsEditFormRouteProp>();

	// set up headerTitle on layout
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: contractsAddTitleText
		})
	}, [ route ])

	return (
		<FormControl>

		</FormControl>
	)
}

export default EditFormScreen;