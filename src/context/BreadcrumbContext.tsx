import React, { createContext, useState } from "react";

interface Route {
	path: string;
	breadcrumbName: string;
};

interface BreadcrumbContextProps {
	routes: Route[];
	setRoutes: React.Dispatch<React.SetStateAction<Route[]>>;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps>({} as BreadcrumbContextProps);

export const BreadcrumbContextProvider: React.FC = ({ children }) => {
	const [routes, setRoutes] = useState<Route[]>([]);

	return (
		<BreadcrumbContext.Provider value={{
			routes,
			setRoutes
		}}>
			{children}
		</BreadcrumbContext.Provider>
	);
}



export default BreadcrumbContext;