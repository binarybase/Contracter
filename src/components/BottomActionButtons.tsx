import { FC, PropsWithChildren } from "react"
import { View } from "@gluestack-ui/themed";

const BottomActionButtons:FC<PropsWithChildren> = ({ children }) => {
	return (
		<View
			backgroundColor="$backgroundLight0" borderTopColor="$backgroundLight300"
			borderTopWidth={1}
			flexDirection="column"
			alignItems="flex-end"
			paddingHorizontal={20}
		>
			{children}
		</View>
	)
}

export default BottomActionButtons;