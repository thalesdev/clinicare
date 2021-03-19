import React, { useContext, useState, useEffect, useRef, createContext } from 'react';
import { Table, Input, Button, Popconfirm, Form, message } from 'antd';

const EditableContext = createContext();

const EditableRow = ({ index, ...props }) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	);
};

const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, renderInput, ...restProps }) => {
	const [editing, setEditing] = useState(false);
	const inputRef = useRef(null);
	const form = useContext(EditableContext);
	useEffect(() => {
		if (editing) {
			inputRef.current.focus();
		}
	}, [editing]);

	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({
			[dataIndex]: record[dataIndex],
		});
	};

	const save = async e => {
		try {
			const values = await form.validateFields();
			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (errInfo) {
			message.error('Ops!! Erro ao salvar: ', errInfo);
		}
	};

	let childNode = children;

	if (editable) {
		childNode = editing ? (
			<Form.Item
				style={{
					margin: 0,
				}}
				name={dataIndex}
				rules={[
					{
						required: true,
						message: `${title} é requerido.`,
					},
				]}
			>
				{renderInput ? (
					renderInput(inputRef, save, record[dataIndex] ?? null)
				) : (
						<Input ref={inputRef} onPressEnter={save} onBlur={save} />
					)}
			</Form.Item>
		) : (
				<div
					className="editable-cell-value-wrap"
					style={{
						paddingRight: 24,
					}}
					onClick={toggleEdit}
				>
					{children}
				</div>
			);
	}

	return <td {...restProps}>{childNode}</td>;
};

const EditableTable = ({ columns, initialData,
	provideNewData,
	onChangeDate,
	reset,
	addedable = true,
	deletable = true,
	renew,
}) => {

	const [dataSource, setDataSource] = useState(initialData);
	const [count, setCount] = useState(0);


	useEffect(() => {
		const { resetState, setResetState } = reset;
		if (resetState) {
			setDataSource([]);
			setCount(0);
			setResetState(false);
		}
	}, [reset]);

	useEffect(() => {
		const { renewState, setRenewState, data } = renew;

		console.log(renew);
		if (renewState) {
			setDataSource(data);
			setCount(data.length);
			setRenewState(false);
		}
	}, [renew]);


	const handleDelete = key => {
		setDataSource(oldDataSource => oldDataSource.filter(item => item.key !== key));
	};

	const handleAdd = () => {
		setDataSource(oldDataSource => [...oldDataSource, provideNewData(count + 1)]);
		setCount(oldCount => oldCount + 1);
	};



	const handleSave = row => {
		const newData = [...dataSource];
		const index = newData.findIndex(item => row.key === item.key);
		const item = newData[index];
		newData.splice(index, 1, { ...item, ...row });
		setDataSource(newData);
	};

	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell,
		},
	};
	const mixColumns = [
		...columns,
		{
			title: 'Ações',
			dataIndex: 'actions',
			render: (text, record) => (
				<Popconfirm title="Deseja mesmo deletar?" onConfirm={() => handleDelete(record.key)}>
					<a>Deletar</a>
				</Popconfirm>
			),
		},
	];


	useEffect(() => {
		if (onChangeDate) {
			onChangeDate(dataSource);
		}
	}, [dataSource]);

	const mapColumns = mixColumns.map(col => {
		if (!col.editable) {
			return col;
		}

		return {
			...col,
			onCell: record => ({
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				handleSave,
				renderInput: col.renderInput,
			}),
		};
	});

	return (
		<div>
			{addedable &&
				<Button
					onClick={handleAdd}
					type="primary"
					style={{
						marginBottom: 16,
					}}
				>
					Adicionar
      </Button>
			}
			<Table
				components={components}
				rowClassName={() => 'editable-row'}
				bordered
				dataSource={dataSource}
				columns={mapColumns}
			/>
		</div>
	);
};

export default EditableTable;
