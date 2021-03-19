import styled from 'styled-components';

export const Container = styled.footer`
	display:flex;
	flex-direction:column;
	background-color:#1d1f27;
	height:300px;
	width:100vw;
`;

export const ServicesContainer = styled.section`
	display:flex;
	flex:1;
	align-items:center;
	justify-content:space-between;
	width:100vw;
	padding:45px 90px;
`;

export const Branding = styled.div`
	display:flex;
	flex-direction:column;
	width: 33.33%;
	height: 100%;
	padding:0 20px;
	font-size:12px;
	font-weight:thin;
	justify-content:space-evenly;
	span {
		color: white;
		line-height: 1.15;
		text-align: justify;
		text-justify: inter-word;
	}
	img {
		width:230px;
		height: 65px;
	}
`;

export const CopyrightContainer = styled.section`
	height: 40px;
	width:100vw;
	display:flex;
	align-items:center;
	justify-content:space-between;
	padding: 4px 90px;
	background-color:rgba(255,255,255,.075);
	color:white;
`;

export const Services = styled.ul`
	list-style:none;
	display:flex;
	height:100%;
	flex-direction:column;
	color:white;
	justify-content:space-evenly;
	h4 {
		position:relative;
		margin-bottom:35px;
		&::after{
			content:'';
			position:absolute;
			bottom:-15px;
			left:0;
			width:50px;
			height:2px;
			background-color: var(--primary);
		}
	}
	a {
		color: white;
		font-weight: thin;
		font-size:14px;
		transition: all .01s ease-in;
		&:hover {
			color: var(--primary);
		}
	}

`;
