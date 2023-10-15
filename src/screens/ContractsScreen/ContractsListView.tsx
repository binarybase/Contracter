import { FC } from "react"
import { FlatList, ListRenderItem, ViewStyle } from "react-native";
import type { TContract, TContractsContext } from "../../types/contract";
import ListItem from "./ListItem";
import { useContractsContext } from "../../hooks/useContracts";
import EmptyListComponent from "../../components/EmptyList";
import { contractsEmptyText } from "../../messages";

// defined props for listView
type Props = {
	style: ViewStyle,
	containerStyle?: ViewStyle
}

// default container style
const DEF_CONTAINER_STYLE: ViewStyle = {
	flexGrow: 1
}
// component with empty text
const ListEmptyComponent = <EmptyListComponent emptyText={contractsEmptyText} />

// this list view manages all contracts that user can create and edit
const ContractsListView: FC<Props> = ({ style, containerStyle }) => {
	// context
	const { data }: TContractsContext = useContractsContext();
	// renderer fn
	const renderItem: ListRenderItem<TContract> = ({ item }): JSX.Element => {
		return (
			<ListItem item={item} />
		)
	}

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			ListEmptyComponent={ListEmptyComponent}
			style={style}
			contentContainerStyle={{...DEF_CONTAINER_STYLE, ...containerStyle}}
			contentInsetAdjustmentBehavior="automatic"
		/>
	)
}

export default ContractsListView;