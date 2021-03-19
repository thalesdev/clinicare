import React, { useContext } from 'react';
import { Menu } from 'antd';
import {
	UserAddOutlined,
	ScheduleOutlined,
	LogoutOutlined,
	ProfileOutlined
} from '@ant-design/icons';

import { Container, Version, WithSideMenu } from './styles';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContex';

const { SubMenu } = Menu;

const SideMenu: React.FC = () => {

	const { logout, user } = useContext(AuthContext);

	return (
		<>
			<WithSideMenu />
			<Container>
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
				>

					<img src={Logo} alt="ClinCare Logo" className="logo" />
					{user.type !== 5 && (
						<SubMenu key="sub1" icon={<ScheduleOutlined />} title="Agendamento">
							{(user.type === 3) &&
								<Menu.Item key="5">
									<Link to="/dashboard/appointments/create">
										Marcar Consulta
								</Link>
								</Menu.Item>
							}
							{(user.type !== 1) &&
								<Menu.Item key="7">
									<Link to="/dashboard/appointments/list">
										Historico de Consultas
							</Link>
								</Menu.Item>
							}
							{(user.type === 1) &&
								<Menu.Item key="6">
									<Link to="/dashboard/exams/create">
										Marcar Exame
								</Link>
								</Menu.Item>
							}
							{(user.type !== 3) &&
								<Menu.Item key="8">
									<Link to="/dashboard/exams/list">
										Historico de Exames
								</Link>
								</Menu.Item>
							}
						</SubMenu>
					)}
					{user.type === 5 &&
						<SubMenu key="sub2" icon={<UserAddOutlined />} title="Cadastramento">
							<Menu.Item key="9">
								<Link to="/dashboard/labs/create">
									Laboratório
						</Link>
							</Menu.Item>
							<Menu.Item key="10">
								<Link to="/dashboard/doctors/create">
									Médico
						</Link>
							</Menu.Item>
							<Menu.Item key="11">
								<Link to="/dashboard/patients/create">
									Paciente
						</Link>
							</Menu.Item>
						</SubMenu>
					}
					{/* {(user.type === 3 || user.type == 2) && (
						<Menu.Item key="33" icon={<ProfileOutlined />}>
							<Link to="/dashboard/me">
								Minha Conta
						</Link>
						</Menu.Item>
					)} */}

					<Menu.Item key="3" icon={<LogoutOutlined />} onClick={e => logout()}>
						Sair
				</Menu.Item>
				</Menu>
				<Version>
					Versão 1.0 estável
			</Version>
			</Container>

		</>
	);
}

export default SideMenu;