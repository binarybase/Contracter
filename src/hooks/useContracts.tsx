import { useContext } from "react";
import { ContractsContext } from "../context/contractsContext"

// hook
export const useContractsContext = () => {
	const context = useContext(ContractsContext);
	if(!context){
		throw new Error('useContractsContext must be used inside its Provider');
	}

	return context;
}