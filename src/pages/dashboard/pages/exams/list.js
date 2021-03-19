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



	const { data: dataCount0 } = useFetch(`/exams?order=0`, api, {});
	const { data: dataCount1 } = useFetch(`/exams?order=1`, api, {});
	const { data: dataCount2 } = useFetch(`/exams?order=2`, api, {});
	const { data: dataCount3 } = useFetch(`/exams?order=3`, api, {});
	const { data: dataCount4 } = useFetch(`/exams?order=4`, api, {});



	const count0 = useMemo(() => dataCount0 ? dataCount0.length : 0, [dataCount0]);
	const count1 = useMemo(() => dataCount1 ? dataCount1.length : 0, [dataCount1]);
	const count2 = useMemo(() => dataCount2 ? dataCount2.length : 0, [dataCount2]);
	const count3 = useMemo(() => dataCount3 ? dataCount3.length : 0, [dataCount3]);
	const count4 = useMemo(() => dataCount4 ? dataCount4.length : 0, [dataCount4]);

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
					<h1>Exames Marcados</h1>
					<Select style={{ width: 200 }} onChange={e => {
						setOrder(e);
					}} defaultValue={"Sempre"}>
						<Option value="0">Sempre ({count0})</Option>
						<Option value="1">Hoje ({count1})</Option>
						<Option value="2">Este Mês ({count2})</Option>
						<Option value="3">Esta Semana ({count3})</Option>
						<Option value="4">Ultimo Ano ({count4})</Option>
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