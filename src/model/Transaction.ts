import { Model } from '@nozbe/watermelondb'
import { field, text, date, readonly, relation, immutableRelation } from '@nozbe/watermelondb/decorators'

export default class Transaction extends Model {
	static table = 'transactions';
	static associations = {
		contracts: { type: 'belongs_to', key: 'contract_id'}
	}

	@text('title') title;
	@text('description') description;
	@text('state') state;
	@field('price') price;
	@readonly @date('created_at') createdAt;
	@readonly @date('updated_at') updatedAt;
	
	@field('contract_id') contractId;
	@immutableRelation('contracts', 'contract_id') contract;
}