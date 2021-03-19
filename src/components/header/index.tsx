import React from 'react';

import { Container, WithHeader } from './styles';
import Logo from '../../assets/img/logo.png';
import Link from '../link';

const Header: React.FC = () => {
	return (
		<Container>
			<WithHeader />
			<section>
				<img src={Logo} alt="Clinicare Logo" />
			</section>
			<nav>
				<Link to="/" label="Home" />
				<Link to="/login" label="Entrar" />
			</nav>
		</Container>
	);
}

export default Header;