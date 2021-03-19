import { PageHeader } from 'antd';
import React, { useContext } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import SideMenu from '../../components/side-menu';
import { AuthContext } from '../../context/AuthContex';
import BreadcrumbContext from '../../context/BreadcrumbContext';
import AppointmentsCreate from './pages/appointments/create';
import AppointmentsList from './pages/appointments/list.js';
import DoctorsCreate from './pages/doctors/create';
import ExamsCreate from './pages/exams/create';
import ExamsList from './pages/exams/list.js';
import LabsCreate from './pages/labs/create';
import MeDoctor from './pages/me/doctor';
import PatientsCreate from './pages/patients/create';
import { Container, Page } from './styles';

const Dashboard: React.FC = () => {

	const { routes } = useContext(BreadcrumbContext);
	const { auth, user } = useContext(AuthContext);
	if (!auth) {
		return <Redirect to="/login" />;
	}

	return (
		<Container>
			<SideMenu />
			<Page>
				<PageHeader
					className="site-page-header"
					title="CliniCare"
					breadcrumb={{ routes }}
					subTitle="Cuidando de Você e Sua Familia"
				/>
				<Switch>
					<Route path="/dashboard/appointments/create" component={AppointmentsCreate} />
					<Route path="/dashboard/appointments/list" component={AppointmentsList} />
					<Route path="/dashboard/exams/create" component={ExamsCreate} />
					<Route path="/dashboard/exams/list" component={ExamsList} />
					<Route path="/dashboard/doctors/create" component={DoctorsCreate} />
					<Route path="/dashboard/labs/create" component={LabsCreate} />
					<Route path="/dashboard/patients/create" component={PatientsCreate} />
					{user.type === 3 && <Route path="/dashboard/me" component={MeDoctor} />}

				</Switch>
			</Page>
		</Container>
	);
}

export default Dashboard;