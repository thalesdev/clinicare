import styled, { createGlobalStyle } from 'styled-components';

export const WithHeader = createGlobalStyle`
	body {
		padding-top: 150px !important;
	}
`;
export const Container = styled.header`
	position:absolute;
	top:0;
	left: 0;
	width: 100vw;
	height: 150px;
	background-color: white;
	padding: 0 95px;
	z-index:100;
	section {
		/* position:relative; */
		display:flex;
		height: 95px;
		padding:18px 0;
		align-items:flex-start;
		justify-content:center;
		flex-direction:column;
		> img {
			width: 212px;
			height:55px;
		}
		::before,
		::after {
			width: 100vw;
			position: absolute;
			left:0;
			top:95px;
			height:0.5px;
			background-color: rgba(0,0,0,.1);
			content: '';
		}
		::after{
			top: 150px;
		}
	}
	nav {
		height: 55px;
		width:100%;
		display:flex;
		flex-direction: row;
		align-items: center;
		justify-content: stretch;
		a {
			display:flex;
			align-items:center;
			justify-content:center;
			padding: 18px 20px;
			font-weight:700;
			color:#444;
			transition: color ease-in .2s;
			&.active,
			&:hover {
				border-bottom: 5px solid var(--secondary);
				padding: 18px 20px 13px 20px;
			}
			&:hover{
				color:var(--tertiary) !important;
			}
		}
	}
`;
