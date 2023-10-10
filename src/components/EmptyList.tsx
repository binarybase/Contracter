import { TextStyle, View, ViewStyle } from "react-native";
import { Icon, Text } from "@gluestack-ui/themed";
import { emptyListText } from "../messages";
import { PropsWithChildren } from "react";
import { PenSquareIcon } from "lucide-react-native";

interface Props extends PropsWithChildren {
	emptyText: string,
	style?: ViewStyle,
	textStyle?: TextStyle
}

/**
 * this component display empty text when flat list is empty
 */
const EmptyListComponent: React.FC<Props> = ({
	emptyText = emptyListText,
	style,
	textStyle,
	children
}) => {
	// default container style
	const DEF_VIEW_STYLE: ViewStyle = {
		alignItems: "center",
		justifyContent: "center",
		height: 200
	}
	// default text style
	const DEF_TEXT_STYLE: TextStyle = {
		marginTop: 10
	}

	return (
		<View style={{...DEF_VIEW_STYLE, ...style}}>
			<Icon as={PenSquareIcon} size="xl" />
			<Text style={{...DEF_TEXT_STYLE, ...textStyle}}>{emptyText}</Text>
			{children}
		</View>
	)
}

export default EmptyListComponent;