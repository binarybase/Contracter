import * as yup from "yup";
import { TContractState } from "../../types/contract";
import { descText, statusText, titleText } from "../../messages";

export const schema = yup.object().shape({
	title: yup.string().min(2).max(70).required().label(titleText),
	description: yup.string().max(512).optional().label(descText),
	state: yup.string().oneOf(Object.values(TContractState)).label(statusText)
})