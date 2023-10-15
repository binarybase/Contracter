import Contract from "../model/Contract"

// state of the contract
export enum TContractState {
	New = 'new',
	InProgress = 'inprogress',
	Completed = 'completed'
}

// contract object
export type TContract = {
	// incremental
	id: number,
	// title of the contract
	title: string,
	// timestamps
	created_at: Date,
	updated_at: Date | null,
	// state of the contract
	state: TContractState,
	// additional description
	description: string
}

// context
export type TContractsContext = {
	// array of contracts
	data: Array<Contract>,
}