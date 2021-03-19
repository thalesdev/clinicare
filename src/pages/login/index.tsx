import { message } from 'antd';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import { AuthContext } from '../../context/AuthContex';
import { Container, LoginContainer, Header, LoginInfo, InputsContainer } from './styles';

const Login: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useContext(AuthContext);
	const handleLogin = async () => {
		if (email && password) {
			if (await login(email, password)) {
				message.success('logado com sucesso');
				return;
			}
			message.error('erro ao logar');
		}
	};


	return (
		<Container>
			<Header>
				<Link to="/">
					<img src={Logo} alt="Logo Clinicare" />
				</Link>
			</Header>
			<LoginContainer>
				<LoginInfo>
					<h1>Acesse sua conta</h1>
					<span>Ainda não possui conta?</span>
					<p>
						Contate o admnistrador e peça para ele realizar o seu cadastro.
						Clincare de médicos e associados, é fácil e rápido.
					</p>
					{/* <Link to="/signup">Cria uma conta agora</Link> */}
				</LoginInfo>
				<InputsContainer>
					<span>
						Insira seus dados para entrar
					</span>
					<label htmlFor="email">
						Email
						<input type="text" name="email" onChange={e => setEmail(e.target.value)} />
					</label>

					<label htmlFor="email">
						Password
						<input type="password" name="email" onChange={e => setPassword(e.target.value)} />
					</label>

					<button onClick={handleLogin}>
						Entrar
					</button>

				</InputsContainer>
			</LoginContainer>
		</Container>
	);
}

export default Login;