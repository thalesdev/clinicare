import { Button, Form, message, Input, Select, DatePicker } from 'antd';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import BreadcrumbContext from '../../../../context/BreadcrumbContext';
import useFetch from '../../../../hooks/useFetch';
import api from '../../../../services/api';

import { Container } from './styles/create';

const { Option } = Select;
interface Doctor {
	name: string;
	email: string;
	id: string;
	completed: boolean;
	type: number;
};

const PatientsCreate: React.FC = () => {

	const { setRoutes } = useContext(BreadcrumbContext);
	const [state, setState] = useState<Doctor>({} as Doctor);
	const formRef = useRef<any>(null);



	const handleSubmit = async (e) => {
		e.preventDefault();
		const values = formRef.current.getFieldsValue();
		try {
			const response = await api.post('/patients', {
				...values,
			},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			console.log(response);
			message.success('Cadastro realizado com sucesso');
			formRef.current.resetFields();
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		setRoutes([
			{
				path: '/dashboard',
				breadcrumbName: 'Inicio'
			},
			{
				path: '/dashboard/doctors/create',
				breadcrumbName: 'Cadastrar Paciênte'
			},
		])
	}, []);


	return (
		<Container>
			<section>
				<h1>
					Registrar um Paciênte
				</h1>
				<Form ref={formRef} >
					<Form.Item name="name">
						<Input size="large" prefix={<>Nome</>} />
					</Form.Item>
					<Form.Item name="email">
						<Input size="large" prefix={<>Email</>} />
					</Form.Item>
					<Form.Item name="password">
						<Input size="large" prefix={<>Senha</>} />
					</Form.Item>
					<Form.Item name="phone">
						<Input size="large" prefix={<>Phone</>} />
					</Form.Item>
					<Form.Item name="gender" label="Gênero" >
						<Select style={{ flex: 1, maxWidth: 320 }}>
							<Option value="0">Feminino</Option>
							<Option value="1">Masculino</Option>
							<Option value="2">Outro</Option>
							<Option value="3">Prefiro não informar</Option>
						</Select>
					</Form.Item>
					<Form.Item name="cpf">
						<Input size="large" prefix={<>CPF</>} />
					</Form.Item>
					<Form.Item name="rg">
						<Input size="large" prefix={<>RG</>} />
					</Form.Item>
					<Form.Item name="birth" label="Data de Nascimento">
						<DatePicker />
					</Form.Item>
					<Form.Item name="marital_status">
						<Input size="large" prefix={<>Estado Civil</>} />
					</Form.Item>
					<Form.Item name="nationality">
						<Input size="large" prefix={<>Nacionalidade</>} />
					</Form.Item>
					<Form.Item name="naturalness">
						<Input size="large" prefix={<>Naturalidade</>} />
					</Form.Item>
					<Form.Item name="address">
						<Input size="large" prefix={<>Endereço</>} />
					</Form.Item>
					<Form.Item name="number">
						<Input size="large" prefix={<>Numero</>} />
					</Form.Item>
					<Form.Item name="complement">
						<Input size="large" prefix={<>Complemento</>} />
					</Form.Item>
					<Form.Item name="district">
						<Input size="large" prefix={<>Bairro</>} />
					</Form.Item>
					<Form.Item name="city">
						<Input size="large" prefix={<>Cidade</>} />
					</Form.Item>
					<Form.Item name="state">
						<Input size="large" prefix={<>Estado</>} />
					</Form.Item>
					<Form.Item name="zipcode">
						<Input size="large" prefix={<>CEP</>} />
					</Form.Item>
					<Button type="primary" onClick={handleSubmit}>
						Criar
					</Button>
				</Form>
			</section>
		</Container>
	);
}

export default PatientsCreate;