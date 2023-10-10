import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Navigators, Routes } from "../constants"
import { ContractType } from "./contract"
import { RouteProp } from "@react-navigation/native"

// navigators inside root stack
export type RootStackParamsList = {
	[Navigators.Contracts]: undefined
}

// contracts navigator params list
export type ContractsStackParamsList = {
	[Routes.ContractsHome]: undefined,
	[Routes.ContractsEditForm]: {
		item?: ContractType
	} | undefined
}

// contracts navigator props
export type ContractsNavigationProp = NativeStackNavigationProp<ContractsStackParamsList, Routes.ContractsHome | Routes.ContractsEditForm>;

// contracts edit form route prop
export type ContractsEditFormRouteProp = RouteProp<ContractsStackParamsList, Routes.ContractsEditForm>;