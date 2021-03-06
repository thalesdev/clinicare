import { Input, Select } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import EditableTable from '../../../../components/editable-table';
import useFetch from '../../../../hooks/useFetch';
import api from '../../../../services/api';

import { Container } from './styles/list';


const { Option } = Select;
const AppointmentsList = () => {


	const [order, setOrder] = useState(0);
	const { data: dataAppointments } = useFetch(`/appointments?order=${order}`, api, {});
	const [renewState, setRenewState] = useState(false);


	const { data: dataCount0 } = useFetch(`/appointments?order=0`, api, {});
	const { data: dataCount1 } = useFetch(`/appointments?order=1`, api, {});
	const { data: dataCount2 } = useFetch(`/appointments?order=2`, api, {});
	const { data: dataCount3 } = useFetch(`/appointments?order=3`, api, {});
	const { data: dataCount4 } = useFetch(`/appointments?order=4`, api, {});



	const count0 = useMemo(() => dataCount0 ? dataCount0.length : 0, [dataCount0]);
	const count1 = useMemo(() => dataCount1 ? dataCount1.length : 0, [dataCount1]);
	const count2 = useMemo(() => dataCount2 ? dataCount2.length : 0, [dataCount2]);
	const count3 = useMemo(() => dataCount3 ? dataCount3.length : 0, [dataCount3]);
	const count4 = useMemo(() => dataCount4 ? dataCount4.length : 0, [dataCount4]);


	const appointments = useMemo(() => {
		if (!dataAppointments) {
			return []
		};
		return dataAppointments.map((appointment) => ({
			...appointment,
			patient: appointment.patient.name,
			doctor: appointment.doctor.name,

		}));
	}, [dataAppointments]);



	useEffect(() => setRenewState(true), [appointments]);


	const columns = [
		{
			title: 'Paciente',
			dataIndex: 'patient',
			editable: false,
		},
		{
			title: 'Médico',
			dataIndex: 'doctor',
			editable: false,
		},

		{
			title: 'Data',
			dataIndex: 'schedule',
			editable: true,
			renderInput: (ref, saveHandle, text) => {
				return <Input type="date" initialValues={text} ref={ref} onBlur={saveHandle} />;
			},
		},
		{
			title: 'Prescrição',
			dataIndex: 'prescription',
			editable: true
		},
		{
			title: 'Observação',
			dataIndex: 'obs',
			editable: true
		},
	];
	const handleNewData = id => {
		return {
			key: id,
			name: `Tipo ${id}`,
		};
	};




	return (
		<Container>
			<section>
				<header>

					<h1>Consultas Marcadas</h1>
					<Select style={{ width: 200 }} onChange={e => setOrder(e)} defaultValue="Sempre">
						<Option value="0">Sempre ({count0})</Option>
						<Option value="1">Hoje ({count1})</Option>
						<Option value="2">Este Mês ({count2})</Option>
						<Option value="3">Esta Semana ({count3})</Option>
						<Option value="4">Ultimo Ano ({count4})</Option>
					</Select>
				</header>

				<EditableTable
					columns={columns}
					initialData={appointments}
					renew={{
						renewState, setRenewState, data: appointments
					}}
					provideNewData={handleNewData}
					onChangeDate={data => { }}
					reset={{}}
					addedable={false}
				/>
			</section>

		</Container>
	);
}

export default AppointmentsList;