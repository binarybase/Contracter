import { createContext, PropsWithChildren } from "react";
import { useStorage } from "../hooks/useStorage";
import type { ContractsContextType } from "../types/contract";
import { Tables } from "../constants";

// context may have undefined value before is provider initialized
export const ContractsContext = createContext<ContractsContextType | undefined>(undefined);

// provider
export const ContractsProvider = ({ children }: PropsWithChildren<{}>) => {
	// data state
	const [ data, setData ] = useStorage(Tables.Contracts, []);

	return (
		<ContractsContext.Provider value={{
			data
		}}>
			{children}
		</ContractsContext.Provider>
	);
}