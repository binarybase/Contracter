import { createContext, PropsWithChildren, useEffect, useState } from "react";
import type { TContract, TContractsContext } from "../types/contract";
import { Tables } from "../constants";
import { database } from "../database";
import Contract from "../model/Contract";

// context may have undefined value before is provider initialized
export const ContractsContext = createContext<TContractsContext | undefined>(undefined);

// provider
export const ContractsProvider = ({ children }: PropsWithChildren<{}>) => {
	// data state
	const [ data, setData ] = useState<Contract[]>([]);
	const observable = database.collections.get('contracts').query().observe();

	useEffect(() => {
		const subscription = observable.subscribe(value => {
			const v:any = value;
			setData(v);
		})

		return () => subscription.unsubscribe();
	}, []);

	return (
		<ContractsContext.Provider value={{
			data
		}}>
			{children}
		</ContractsContext.Provider>
	);
}