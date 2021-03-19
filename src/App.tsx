import React from 'react';
import AuthContextProvider from './context/AuthContex';
import { BreadcrumbContextProvider } from './context/BreadcrumbContext';
import Routes from './routes';
import GlobalStyle from './themes/global';


const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<AuthContextProvider>
				<BreadcrumbContextProvider>
					<Routes />
				</BreadcrumbContextProvider>
			</AuthContextProvider>
		</>
	);
}

export default App;
