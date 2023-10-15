import { Model } from '@nozbe/watermelondb'
import { field, text, date, readonly } from '@nozbe/watermelondb/decorators'

export default class Contract extends Model {
	static table = 'contracts';
	static associations = {
		transactions: { type: 'has_many', foreignKey: 'id'}
	}

	@text('title') title;
	@text('description') description;
	@text('state') state;
	@readonly @date('created_at') createdAt;
	@readonly @date('updated_at') updatedAt;
}