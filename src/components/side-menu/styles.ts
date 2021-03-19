import styled, { createGlobalStyle } from 'styled-components';

export const WithSideMenu = createGlobalStyle`
	body{
		padding-left: 256px;
	}
`;

export const Container = styled.aside`
	width:256px;
	height:100vh;
	display: flex;
	flex-direction:column;
	justify-content:space-between;
	img.logo {
		width:230px;
		margin:30px 0;
	}
	background-color:#fff;
	position:fixed;
	left:0;
	top:0;
`;

export const Version = styled.span`
	padding: 8px;
	color: #444;
	width: 100%;
	display:flex;
	justify-content:center;
`;
