import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
	version: 1,
	tables: [
		tableSchema({
			name: 'contracts',
			columns: [
				{name: 'title', type: 'string'},
				{name: 'created_at', type: 'number'},
				{name: 'updated_at', type: 'number'},
				{name: 'state', type: 'string'},
				{name: 'description', type: 'string', isOptional: true}
			],
		}),
		tableSchema({
			name: 'transactions',
			columns: [
				{name: 'title', type: 'string'},
				{name: 'created_at', type: 'number'},
				{name: 'updated_at', type: 'number'},
				{name: 'price', type: 'number'},
				{name: 'description', type: 'string', isOptional: true},
				{name: 'contract_id', type: 'string'}
			],
		})
	]
  })
  
