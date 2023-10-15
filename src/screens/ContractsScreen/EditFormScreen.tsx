import { FormControl, Icon, Input, InputField, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, Textarea, TextareaInput } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { TContractsEditFormRouteProp, TContractsNavigationProp } from "../../types/navigation";
import { useLayoutEffect, Fragment, useState, useCallback } from "react";
import { contractsAddTitleText, descPlaceholder, descText, saveText, statusCompletedText, statusInProgressText, statusNewText, statusText, titleText } from "../../messages";
import { ScrollView, StyleSheet, Text, Button as RNButton } from "react-native";
import { ChevronDownIcon, SaveIcon } from "lucide-react-native";
import { TContract, TContractState } from "../../types/contract";
import { useFormik } from "formik";
import { schema } from "./EditFormSchema";
import { createFormikError } from "../../components/FormError";

/**
 * this screen contains editable form to create / edit contracts
 */
const EditFormScreen = (): JSX.Element => {
	// model
	const model:TContract = {
		id: 0,
		title: '',
		state: TContractState.New,
		description: '',
		created_at: new Date(),
		updated_at: null
	}
	
	// submit action
	const onSubmit = useCallback((values:TContract) => {

	}, []);

	// hooks
	const navigation = useNavigation<TContractsNavigationProp>();
	const route = useRoute<TContractsEditFormRouteProp>();
	const formik = useFormik({
		initialValues: model,
		onSubmit,
		validationSchema: schema,
		validateOnChange: true
	})
	
	// nested components
	const HeaderRightButton = (): JSX.Element => (
		<RNButton onPress={() => formik.handleSubmit()} title={saveText} disabled={!formik.isValid} />
	);
	const FormikError = createFormikError(formik);
		
	// set up headerTitle on layout
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: contractsAddTitleText,
			headerRight: HeaderRightButton
		})
	}, [ route, formik.isValid ]);
	
	return (
		<Fragment>
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={style.view}>
				<FormControl
					size="md"
				>
					<Input variant="underlined">
						<InputField type="text" placeholder={titleText} onChangeText={formik.handleChange("title")} />
					</Input>
					<FormikError name="title" />
					<Select onValueChange={formik.handleChange("state")}>
						<SelectTrigger variant="underlined">
							<SelectInput placeholder={statusText} />
							<SelectIcon mr="$3">
								<Icon as={ChevronDownIcon} />
							</SelectIcon>
						</SelectTrigger>
						<SelectPortal>
							<SelectBackdrop />
							<SelectContent>
								<SelectDragIndicatorWrapper>
									<SelectDragIndicator />
								</SelectDragIndicatorWrapper>
								<SelectItem label={statusNewText} value={TContractState.New} />
								<SelectItem label={statusInProgressText} value={TContractState.InProgress} />
								<SelectItem label={statusCompletedText} value={TContractState.Completed} />
							</SelectContent>
						</SelectPortal>
					</Select>
					<FormikError name="state" />
					<Textarea marginVertical={10}>
						<TextareaInput placeholder={descPlaceholder} onChangeText={formik.handleChange("description")} />
					</Textarea>
					<FormikError name="description" />
				</FormControl>
			</ScrollView>
		</Fragment>
	)
}

const style = StyleSheet.create({
	view: {
		padding: 15
	}
})

export default EditFormScreen;