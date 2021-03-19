import { Button, DatePicker, message, Select } from 'antd';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { AuthContext } from '../../../../context/AuthContex';
import BreadcrumbContext from '../../../../context/BreadcrumbContext';
import useFetch from '../../../../hooks/useFetch';
import api from '../../../../services/api';
import LabsList from '../labs/list';

import { Container } from './styles/create';

const { Option } = Select;

const ExamsCreate: React.FC = () => {

	const { setRoutes } = useContext(BreadcrumbContext);
	const { user } = useContext(AuthContext);
	const { data: dataPatients } = useFetch<any>('/patients', api, {});
	const { data: dataLabs } = useFetch<any>('/laboratories', api, {});

	const [userInput, setUserInput] = useState<any>(null);
	const [labInput, setLabInput] = useState<any>(null);
	const [typeExamInput, setTypeExamInput] = useState<any>(null);
	const [dateInput, setDateInput] = useState<any>(null);

	const patients = useMemo(() => {
		if (!dataPatients) {
			return [];
		}
		if (user.type === 2) return [user];
		return dataPatients;
	}, [dataPatients, user]);

	const labs = useMemo(() => {
		if (!dataLabs) {
			return [];
		}

		if (user.type === 1) return [user];
		return dataLabs;
	}, [dataLabs, user]);


	const examsTypes = useMemo(() => {
		if (labInput) {
			const lab = labs.find(el => el.laboratory.id === labInput);
			if (lab && lab.laboratory && lab.laboratory.exam_types) {
				return lab.laboratory.exam_types;
			}
		}
		return [];
	}, [labInput, labs]);


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.post('/exams', {
				patient_id: userInput,
				laboratory_id: labInput,
				schedule: dateInput,
				exam_type_id: typeExamInput
			});
			console.log(response);
			message.success('Agendamento realizado com sucesso');
			setDateInput(null);
			setTypeExamInput(null);
			setLabInput(null);
			setUserInput(null);

		} catch (err) {
			message.error(err);
		}
	}

	useEffect(() => {
		setRoutes([
			{
				path: '/dashboard',
				breadcrumbName: 'Inicio'
			},
			{
				path: '/dashboard/exams/create',
				breadcrumbName: 'Agendar Exame'
			},
		])
	}, []);


	return (
		<Container>
			<section>
				<h1>
					Marcar um exame
				</h1>

				<label>
					<span>Paciente</span>
					<Select
						showSearch
						style={{ flex: 1, maxWidth: '320px' }}
						allowClear
						onChange={e => setUserInput(e)}
						value={userInput}
					>
						{patients.map((patient) => (
							<Option value={patient.id} key={patient.id}>{`${patient.name}(${patient.email})`}</Option>
						))}
					</Select>
				</label>
				<label>
					<span>Laboratório</span>
					<Select style={{ flex: 1, maxWidth: '320px' }} allowClear
						onChange={e => setLabInput(e)}
						value={labInput}
					>
						{labs.map((lab) => (
							<Option value={lab.laboratory.id} key={lab.laboratory.id}>{`${lab.name}(${lab.email})`}</Option>
						))}
					</Select>
				</label>
				<label>
					<span>Tipo de exame</span>
					<Select style={{ flex: 1, maxWidth: '320px' }} allowClear
						onChange={e => setTypeExamInput(e)}
						value={typeExamInput}
					>
						{examsTypes.map(exam => (
							<Option value={exam.id} key={exam.id}>{exam.name}</Option>
						))}

					</Select>
				</label>
				<label>
					<span>Data</span>
					<DatePicker
						showTime={{ format: 'HH:mm' }}
						format="YYYY-MM-DD HH:mm"
						onChange={e => setDateInput(e)}
						value={dateInput} />
				</label>
				<Button type="primary" onClick={handleSubmit}>
					Agendar
				</Button>
			</section>
		</Container>
	);
}

export default ExamsCreate;