import { FC } from "react";
import { Text } from "@gluestack-ui/themed";

// type of properties
type Props = {
	name: string
	formik: any
}

// error component
const FormikError:FC<Props> = ({ name, formik }) => {
	// since these properties does not have strictly types defined by formik, it should be casted as any
	const touched:any = formik?.touched || [];
	const errors:any = formik?.errors || [];
	const errorText:string = errors[name];

	// display error message when conditions are met
	return !!touched && !!errorText && (
		<Text color="$red700">
			{errorText}
		</Text>
	)
}

const createFormikError = (formik: any) => ({ name }: ({ name: string })): JSX.Element => <FormikError name={name} formik={formik} />;

export { createFormikError };