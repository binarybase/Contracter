import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Navigators, Routes } from "../constants"
import { TContract } from "./contract"
import { RouteProp } from "@react-navigation/native"

// navigators inside root stack
export type TRootStackParamsList = {
	[Navigators.Contracts]: undefined
}

// contracts navigator params list
export type TContractsStackParamsList = {
	[Routes.ContractsHome]: undefined,
	[Routes.ContractsEditForm]: {
		item?: TContract
	} | undefined
}

// contracts navigator props
export type TContractsNavigationProp = NativeStackNavigationProp<TContractsStackParamsList, Routes.ContractsHome | Routes.ContractsEditForm>;

// contracts edit form route prop
export type TContractsEditFormRouteProp = RouteProp<TContractsStackParamsList, Routes.ContractsEditForm>;