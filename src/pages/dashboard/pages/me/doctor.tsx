import { Button, Form, message, Input, Select, DatePicker } from 'antd';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContex';
import BreadcrumbContext from '../../../../context/BreadcrumbContext';
import useFetch from '../../../../hooks/useFetch';
import api from '../../../../services/api';
import { Container } from './styles/doctor';

const { Option } = Select;
interface Doctor {
	name: string;
	email: string;
	id: string;
	completed: boolean;
	type: number;
};

const MeDoctor: React.FC = () => {

	const { setRoutes } = useContext(BreadcrumbContext);
	const { user } = useContext(AuthContext);
	const { data: doctorData, error } = useFetch<any>(user ? `/list/doctor.php?id=${user.user.id}` : '', api, {});
	const formRef = useRef<any>(null);

	useEffect(() => {
		console.log(user.user);
	}, [user]);



	const handleSubmit = async (e) => {
		e.preventDefault();
		const values = formRef.current.getFieldsValue();
		try {
			const response = await api.post('/edit/edit_doctor.php', {
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
				path: '/dashboard/me',
				breadcrumbName: 'Atualizar Dados'
			},
		])
	}, []);

	if (!doctorData) {
		return <div />;
	}


	return (
		<Container>
			<section>
				<h1>
					Modificar meus dados
				</h1>
				<Form ref={formRef} >
					<Form.Item name="name" initialValue={doctorData.name}>
						<Input size="large" prefix={<>Nome</>} />
					</Form.Item>
					<Form.Item name="email" initialValue={doctorData.email}>
						<Input size="large" prefix={<>Email</>} />
					</Form.Item>
					<Form.Item name="password">
						<Input size="large" prefix={<>Senha</>} />
					</Form.Item>
					<Form.Item name="phone" initialValue={doctorData.phone}>
						<Input size="large" prefix={<>Phone</>} />
					</Form.Item>
					<Form.Item name="gender" label="Gênero" initialValue={doctorData.gender}>
						<Select style={{ flex: 1, maxWidth: 320 }}>
							<Option value="0">Feminino</Option>
							<Option value="1">Masculino</Option>
							<Option value="2">Outro</Option>
							<Option value="3">Prefiro não informar</Option>
						</Select>
					</Form.Item>
					<Form.Item name="cpf" initialValue={doctorData.cpf}>
						<Input size="large" prefix={<>CPF</>} />
					</Form.Item>
					<Form.Item name="rg" initialValue={doctorData.rg}>
						<Input size="large" prefix={<>RG</>} />
					</Form.Item>
					<Form.Item name="birth" label="Data de Nascimento">
						<DatePicker />
					</Form.Item>
					<Form.Item name="marital_status" initialValue={doctorData.marital_status}>
						<Input size="large" prefix={<>Estado Civil</>} />
					</Form.Item>
					<Form.Item name="nationality" initialValue={doctorData.nationality}>
						<Input size="large" prefix={<>Nacionalidade</>} />
					</Form.Item>
					<Form.Item name="naturalness" initialValue={doctorData.naturalness}>
						<Input size="large" prefix={<>Naturalidade</>} />
					</Form.Item>
					<Form.Item name="address" initialValue={doctorData.address}>
						<Input size="large" prefix={<>Endereço</>} />
					</Form.Item>
					<Form.Item name="number" initialValue={doctorData.number}>
						<Input size="large" prefix={<>Numero</>} />
					</Form.Item>
					<Form.Item name="complement" initialValue={doctorData.complement}>
						<Input size="large" prefix={<>Complemento</>} />
					</Form.Item>
					<Form.Item name="district" initialValue={doctorData.district}>
						<Input size="large" prefix={<>Bairro</>} />
					</Form.Item>
					<Form.Item name="city" initialValue={doctorData.city}>
						<Input size="large" prefix={<>Cidade</>} />
					</Form.Item>
					<Form.Item name="state" initialValue={doctorData.state}>
						<Input size="large" prefix={<>Estado</>} />
					</Form.Item>
					<Form.Item name="zipcode" initialValue={doctorData.zipcode}>
						<Input size="large" prefix={<>CEP</>} />
					</Form.Item>
					<Form.Item name="specialty" initialValue={doctorData.specialty}>
						<Input size="large" prefix={<>Especialidade</>} />
					</Form.Item>
					<Form.Item name="crm" initialValue={doctorData.crm}>
						<Input size="large" prefix={<>CRM</>} />
					</Form.Item>
					<Form.Item name="occupation_area" initialValue={doctorData.occupation_area}>
						<Input size="large" prefix={<>Área de Atuação</>} />
					</Form.Item>
					<Form.Item name="salary" initialValue={doctorData.salary}>
						<Input size="large" prefix={<>Salário</>} />
					</Form.Item>
					<Button type="primary" onClick={handleSubmit}>
						Salvar
					</Button>
				</Form>
			</section>
		</Container>
	);
}

export default MeDoctor;