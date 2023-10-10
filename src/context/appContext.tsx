import { FC, createContext, useState, PropsWithChildren } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

// context interface
interface AppContextType {
	theme: ColorSchemeName
}

// default context value
const defValue:AppContextType = {
	theme: "light"
}

// context
export const AppContext = createContext(defValue);

// provider
export const AppContextProvider:FC<PropsWithChildren> = ({ children }) => {
	const theme = useColorScheme();

	return (
		<AppContext.Provider value={{
			theme
		}}>
			{children}
		</AppContext.Provider>
	)
}