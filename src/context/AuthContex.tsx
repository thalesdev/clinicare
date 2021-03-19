import React, { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import api from '../services/api';

interface AuthContextProps {
	user: any;
	token: string;
	login(email, password): Promise<boolean>;
	logout(): void;
	auth: boolean;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);


const AuthContextProvider: React.FC = ({ children }) => {

	const [storageToken, setStorageToken] = useLocalStorage('clinicare@token', null);
	const [storageUser, setStorageUser] = useLocalStorage('clinicare@user', null);


	useEffect(() => {
		if (!!storageToken) {
			api.defaults.headers.Authorization = `Bearer ${storageToken}`;
		}
	}, [storageToken]);


	async function login(email, password) {
		try {
			const { data: { token, user } } = await api.post('/session', {
				email,
				password
			});
			setStorageToken(token);
			setStorageUser(user);
			api.defaults.headers.Authorization = `Bearer ${token}`;
			console.log('token:', token);
			console.log('user:', user);
			return true;
		}
		catch (err) {
			return false;
		}
	}

	function logout() {
		setStorageToken(null);
		setStorageUser(null);
	}

	return (
		<AuthContext.Provider value={{
			token: storageToken,
			login,
			logout,
			user: storageUser,
			auth: storageUser !== null,
		}}>
			{children}
		</AuthContext.Provider>
	);
}


export default AuthContextProvider;