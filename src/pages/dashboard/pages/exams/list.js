import { Input, Select } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import EditableTable from '../../../../components/editable-table';
import useFetch from '../../../../hooks/useFetch';
import api from '../../../../services/api';

import { Container } from './styles/list';

const { Option } = Select;

const ExamsList = () => {

	const [order, setOrder] = useState(0);
	const { data: dataExams } = useFetch(`/exams?order=${order}`, api, {});

	const [renewState, setRenewState] = useState(false);




	const exams = useMemo(() => {
		if (!dataExams) {
			return []
		};
		return dataExams.map((exam) => {
			const patient = exam.patient;
			const lab = exam.laboratory.user;
			return ({
				...exam,
				patient: patient.name,
				lab: `${lab.name}(${lab.email})`,
				key: exam.id
			});
		});
	}, [dataExams]);



	useEffect(() => setRenewState(true), [exams]);



	const columns = [
		{
			title: 'Paciente',
			dataIndex: 'patient',
			editable: false,
		},
		{
			title: 'Laboratorio',
			dataIndex: 'lab',
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
			title: 'Resultado',
			dataIndex: 'result',
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
					<Select style={{ width: 200 }} onChange={e => {
						setOrder(e);
					}} defaultValue={"Sempre"}>
						<Option value="0">Sempre</Option>
						<Option value="1">Hoje</Option>
						<Option value="2">Este Mês</Option>
						<Option value="3">Esta Semana</Option>
						<Option value="4">Ultimo Ano</Option>
					</Select>
				</header>
				{exams && (
					<EditableTable
						columns={columns}
						initialData={exams}
						renew={{
							renewState, setRenewState, data: exams
						}}
						provideNewData={handleNewData}
						onChangeDate={data => { }}
						reset={{}}
						addedable={false}
					/>
				)}

			</section>

		</Container>
	);
}

export default ExamsList;