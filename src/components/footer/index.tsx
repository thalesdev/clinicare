import React from 'react';
import { Branding, Container, CopyrightContainer, Services, ServicesContainer } from './styles';

import Logo from '../../assets/img/logo.png';
import Link from '../link';

const Footer: React.FC = () => {
	return (
		<Container >
			<ServicesContainer>
				<Branding>
					<img src={Logo} alt="Clincare Logotipo" />
					<span>
						Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.
					</span>
				</Branding>
				<Services>
					<h4>
						Nossos Serviços
					</h4>
					<li><Link to="/agendamentos" label="Agendamentos" /></li>
					<li><Link to="/workinghours" label="Horario de Atendimento" /></li>
					<li><Link to="/offers" label="Ofertas especiais" /></li>
				</Services>
			</ServicesContainer>
			<CopyrightContainer>
				<span>Copyright @ Clinicare 2020. Todos Direitos Reservados.</span>
			</CopyrightContainer>
		</Container>
	);
}

export default Footer;