// state of the contract
export enum ContractStateType {
	New,
	InProgress,
	Completed
}

// contract object
export type ContractType = {
	// incremental
	id: number,
	// title of the contract
	title: string,
	// timestamps
	created_at: Date,
	updated_at: Date,
	// state of the contract
	state: ContractStateType
}

// context
export type ContractsContextType = {
	// array of contracts
	data: Array<ContractType>,
}