import { Button, DatePicker, message, Select } from 'antd';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContex';
import BreadcrumbContext from '../../../../context/BreadcrumbContext';
import useFetch from '../../../../hooks/useFetch';
import api from '../../../../services/api';

import { Container } from './styles/create';

const { Option } = Select;

interface User {
	name: string;
	email: string;
	id: string;
	completed: boolean;
	type: number;
};
interface Doctor {
	name: string;
	email: string;
	id: string;
};

const AppointmentsCreate: React.FC = () => {
	const { data: dataPatients } = useFetch<any>('/patients', api, {});
	const { data: dataDoctors } = useFetch<any>('/doctors', api, {});

	const { user } = useContext(AuthContext);

	const patients = useMemo(() => {
		if (!dataPatients) {
			return [];
		}
		if (user.type === 2) {
			return [user];
		}
		return dataPatients;
	}, [dataPatients, user]);

	const doctors = useMemo(() => {
		if (!dataDoctors) {
			return [];
		}
		if (user.type === 3) {
			return [user];
		}
		return dataDoctors;
	}, [dataDoctors, user]);

	const [userInput, setUserInput] = useState<any>(null);
	const [doctorInput, setDoctorInput] = useState<any>(null);
	const [dateInput, setDateInput] = useState<any>(null);


	useEffect(() => { console.log(dataDoctors, doctors) }, [dataDoctors, doctors]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.post('/appointments', {
				patient_id: userInput,
				doctor_id: doctorInput,
				schedule: dateInput
			});
			console.log(response);
			message.success('Agendamento realizado com sucesso');
			setDateInput(null);
			setDoctorInput(null);
			setUserInput(null);

		} catch (err) {
			message.error(err);
		}
	}


	const { setRoutes } = useContext(BreadcrumbContext);
	useEffect(() => {
		setRoutes([
			{
				path: '/dashboard',
				breadcrumbName: 'Inicio'
			},
			{
				path: '/dashboard/appointments/create',
				breadcrumbName: 'Agendar Consulta'
			},
		])
	}, []);


	return (
		<Container>
			<section>
				<h1>
					Marcar uma consulta
				</h1>
				<label>
					<span>Paciente</span>
					<Select
						showSearch style={{ flex: 1, maxWidth: '320px' }}
						allowClear onChange={e => setUserInput(e)}
						value={userInput}>
						{patients.map(patient => (
							<Option value={patient.id} key={patient.id}>{`${patient.name}(${patient.email})`}</Option>
						))}
					</Select>
				</label>
				<label>
					<span>Médico</span>
					<Select
						style={{ flex: 1, maxWidth: 350 }}
						allowClear onChange={e => setDoctorInput(e)}
						value={doctorInput}>
						{doctors.map(doctor => (
							<Option value={doctor.id} key={doctor.id}>{`${doctor.name}(${doctor.email})`}</Option>
						))}
					</Select>
				</label>
				<label>
					<span>Data</span>
					<DatePicker
						showTime={{ format: 'HH:mm', }}
						format="YYYY-MM-DD HH:mm"
						onChange={e => setDateInput(e)}
						value={dateInput}
					/>
				</label>
				<Button type="primary" onClick={handleSubmit}>
					Agendar
				</Button>
			</section>
		</Container>
	);
}

export default AppointmentsCreate;