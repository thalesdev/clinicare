import { Button, Form, message, Input, Select, DatePicker } from 'antd';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import EditableTable from '../../../../components/editable-table';
import BreadcrumbContext from '../../../../context/BreadcrumbContext';
import api from '../../../../services/api';

import { Container } from './styles/create';

const { Option } = Select;

const LabsCreate: React.FC = () => {

	const { setRoutes } = useContext(BreadcrumbContext);
	const formRef = useRef<any>(null);
	const [resetState, setResetState] = useState(false);

	const [types, setTypes] = useState<any>();

	const columns = [
		{
			title: 'Nome',
			dataIndex: 'name',
			width: '100%',
			editable: true,
		}
	];
	const handleNewData = id => {
		return {
			key: id,
			name: `Tipo ${id}`,
		};
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		const values = formRef.current.getFieldsValue();
		try {
			const response = await api.post('/laboratories', {
				...values,
				types: types.map(type => type.name)
			});
			console.log(response);
			message.success('Cadastro realizado com sucesso');
			formRef.current.resetFields();
			setResetState(true);
		} catch (err) {
			message.error(err.message || err);
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
				breadcrumbName: 'Cadastrar um Laboratório'
			},
		])
	}, []);


	return (
		<Container>
			<section>
				<h1>
					Registrar um laboratório
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
					<Form.Item name="cnpj">
						<Input size="large" prefix={<>CNPJ</>} />
					</Form.Item>
					<Form.Item name="cnes">
						<Input size="large" prefix={<>CNES</>} />
					</Form.Item>
					<Form.Item name="iss">
						<Input size="large" prefix={<>ISS</>} />
					</Form.Item>
					<Form.Item name="crm">
						<Input size="large" prefix={<>CRM</>} />
					</Form.Item>
					<Form.Item name="employees">
						<Input size="large" prefix={<>Relação de Funcionarios</>} />
					</Form.Item>
					<Form.Item>
						<label>Tipos de Exame</label>
						<EditableTable
							columns={columns}
							initialData={[]}
							provideNewData={handleNewData}
							onChangeDate={data => setTypes(data)}
							reset={{
								resetState,
								setResetState
							}}
							renew={{}}
						/>
					</Form.Item>
					<Button type="primary" onClick={handleSubmit}>
						Criar
					</Button>
				</Form>
			</section>
		</Container>
	);
}

export default LabsCreate;