import type { TContract } from "../../types/contract"
import { Text, View } from "@gluestack-ui/themed";
type Props = {
	item: TContract
}

const ListItem: React.FC<Props> = ({ item }) => (
	<View>
		<Text>
			{item.title}
		</Text>
	</View>
);

export default ListItem;