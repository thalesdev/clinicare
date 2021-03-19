import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

interface LinkProps {
	label: string;
	to: any;
	exact?: boolean;
};


const Link: React.FC<LinkProps> = ({ label, to, exact }) => {
	const match = useRouteMatch({
		path: to,
		exact
	});

	return (
		<RouterLink to={to} className={match ? 'active' : ''} >
			{label}
		</RouterLink>
	);
}

export default Link;