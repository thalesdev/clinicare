import React, { useRef, useState } from 'react';
import { message } from 'antd';
import { Redirect, Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import { cpfMask, onlyNumberMask } from '../../util/masks';
import { Container, SignupContainer, BgContainer, Group } from './styles';
import api from '../../services/api';

interface FormProps {
	terms: string;
	password: string;
	password_confirm: string;
	email: string;
	name: string;
	gender: string;
	phone: string;
	cpf: string;
	rg: string;
};

interface Response extends Omit<Omit<FormProps, 'terms'>, 'password_confirm'> {
	completed: boolean;
}

const Signup: React.FC = () => {

	const cpfRef = useRef<any>();
	const rgRef = useRef<any>();
	const [redirect, setRedirect] = useState(false);

	const handleSignup = async (e) => {
		e.preventDefault();

		const values: FormProps = (Object.fromEntries(new FormData(e.target).entries()) as unknown) as FormProps;
		const nullTest = Array.from(Object.entries(values)).every(([_, val]) => !!val);
		if (!nullTest) {
			message.error('Todos campos devem estar preenchidos');
			return;
		}
		else if (values.terms === '0') {
			message.error('Você deve aceitar os termos');
			return;
		}
		else if (values.password !== values.password_confirm) {
			message.error('Senhas não coincidem');
			return;
		}
		try {
			const payload: Response = {
				...values,
				completed: false,
			};
			const user = await api.post('/users', payload);
			console.log(user);
			message.success('Cadastro realizado com sucesso');
			setTimeout(() => {
				setRedirect(true);
			}, 2000);
		} catch (err) {
			message.error(err.message);
		}
	};

	if (redirect) {
		return <Redirect to="/" />
	}

	return (
		<Container>
			<SignupContainer>
				<Link to="/">
					<img src={Logo} alt="Logo ClinCare" />
				</Link>
				<h1>Seja Bem-Vindo</h1>
				<span>
					Realize seu cadastro para tornar-se um usuario na plataforma ClinCare.
				</span>
				<br />
				<form onSubmit={handleSignup}>
					<Group>
						<label htmlFor="name">
							Nome
							<input type="text" name="name" />
						</label>
						<label htmlFor="email">
							Email
						<input type="text" name="email" />
						</label>
					</Group>
					<Group>
						<label htmlFor="cpf">
							CPF
							<input type="text" name="cpf" ref={cpfRef} onChange={e => {
								if (cpfRef.current) {
									cpfRef.current.value = cpfMask(e.target.value);
								}
							}} />
						</label>
						<label htmlFor="rg">
							RG
						<input type="text" name="rg" ref={rgRef} onChange={e => {
								if (rgRef.current) {
									rgRef.current.value = onlyNumberMask(e.target.value);
								}
							}} />
						</label>
					</Group>
					<Group>
						<label htmlFor="phone">
							Telefone
							<input type="text" name="phone" />
						</label>
						<label htmlFor="gender">
							Genêro
						<select name="gender">
								<option value="0">Feminino</option>
								<option value="1">Masculino</option>
								<option value="2">Outro</option>
								<option value="3">Prefiro não informar</option>
							</select>
						</label>
					</Group>
					<Group>
						<label htmlFor="password">
							Senha
							<input type="password" name="password" />
						</label>
						<label htmlFor="password_confirm">
							Confirmação
						<input type="password" name="password_confirm" />
						</label>
					</Group>
					<span>
						<input type="hidden" name="terms" value="0" />
						<input type="checkbox" name="terms" value="1" />
						<a href="#terms">Termos de Uso e Política de Privacidade</a>
					</span>
					<button type="submit">Cadastrar</button>
				</form>
			</SignupContainer>
			<BgContainer />
		</Container>

	);
}

export default Signup;