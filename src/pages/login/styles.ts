import styled from 'styled-components';

import Background from '../../assets/img/bg-login.png'

export const Container = styled.div`
	width:100vw;
	height:100vh;
	display:flex;
	flex-direction:column;
	background-image: url(${Background});
	background-repeat: repeat;
`;

export const Header = styled.header`
	width: 100vw;
	height: 80px;
	padding: 15px;
	img {
		width:212px;
	}
	// #responsive
`;

export const LoginContainer = styled.aside`
	width: 100vw;
	padding: 90px 180px;
	display:flex;
	flex-direction: row;
	align-items:center;
	justify-content:space-between;
	// #responsive
`;

export const LoginInfo = styled.section`
	display:flex;
	flex-direction:column;
	align-items: flex-start;
	justify-content:center;
	max-width: 450px;
	// #responsive
	h1{
		font-size: 60px;
		margin-bottom:25px;
		color:var(--secondary);
	}
	span {
		margin-bottom:10px;
		font-weight:bold;
		line-height:25px;
		margin-bottom:20px;
	}
	p {
		text-justify:inter-word;
		text-align: justify;
		line-height:25px;
		color:#444;
	}
	button,
	a {
		display:flex;
		align-items:left;
		justify-content:center;
		padding: 15px 22px;
		font-weight:400;
		color:var(--secondary);
		border:3px solid var(--tertiary);
		border-radius:4px;
		background-color: transparent;
		outline:0 !important;
		font-size:18px;
		flex:1;
		cursor: pointer;
		margin-top:20px;
		transition: all .3s ease-in-out;
		&:hover {
			background-color: var(--primary);
			color:white;
			border-color:var(--primary);
		}
	}
	

`;

export const InputsContainer = styled.section`
	display:flex;
	width : 400px;
	height: 100%;
	padding: 40px;
	margin-left: 30px;
	flex-direction: column;
	align-items:center;
	justify-content:flex-start;
	border-radius: 5px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
	> span {
		color: var(--primary);
		font-weight: 700;
		margin-bottom:20px;
		display:flex;
		width:100%;
		justify-content:flex-start;
	}

	label {
		display:flex;
		padding:5px 8px;
		flex-direction:column;
		align-items:flex-start;
		justify-content:flex-start;
		font-size: 16px;
    letter-spacing: 0;
    line-height: 19px;
		width: 100%;
    border: 1px solid #ece3fc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
		margin:18px 0;
		input {
			display:flex;
			width: 100%;
			height:30px;
			color: var(--secondary);
			font-size: 16px;
			border:0;
		}
	}

	button{
			border-radius: 3px;
			background-color: var(--secondary);
			color: #FFFFFF;
			width: 100%;
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			font-weight: bold;
			letter-spacing: 0;
			line-height: 20px;
			text-align: center;
			padding: 20px 20px;
			transition: .5s;
			cursor: pointer;
			margin-top:35px;
			&:hover{
				background-color: var(--primary);
			}
		}

`;