import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
	width:100vw;
	display:flex;
	flex-direction:column;
`;

export const ContentRTL = styled.div`
	display:flex;
	width:100%;
	height:100%;
	padding: 100px;
	align-items:center;
	justify-content:flex-end;

	span {
		color:#333;
	}
	> span {
		font-size: 20px;
		line-height: 1.55;
		clear:both;
	}
	ul {
		margin-top:30px;
		display: flex;
		list-style: none;
		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			h4 ~ span {
				margin-top:8px;
			}
			span {
				display:flex;
				flex-direction:column;
			padding-right: 10px;
				svg {
					fill: white;
					
				}
				&.icon{
					margin-right: 15px;
					padding:12px;
					border-radius:50%;
					background-color: var(--secondary);
				}
			}
			span:nth-of-type(1){
				flex:1;
			}
		}
	}
`;

export const ContentLTR = styled(ContentRTL)`
	align-items:center;
	justify-content:flex-start;
`;


export const Headline = styled.h1`
	font-size: 60px;
	line-height: 1.15;
	letter-spacing: 2px;
	font-weight:bolder;
	display:block;
	color:#222;
	b {
		color: var(--tertiary);
	}
`;

export const InfoContainer = styled.ul`
	display: flex;
	justify-content:stretch;
	list-style: none;
	margin-block-end: 0;
	width: 90%;
	margin-top:-80px;
	margin-bottom: 80px;
	margin-left:5%; 
	li {
		width: 25%;
		padding:20px;
		height:250px;
		display:flex;
		flex-direction: column;
		align-items:center;
		justify-content:space-between;
		background-color: var(--secondary);
		color: #fff;
		text-align:center;
		div {
			flex:1;
			display:flex;
			align-items:center;
			justify-content:center;
			flex-direction:column;
		}
		span{
			font-size:20px;
			margin-bottom:15px;
		}
		p {font-size:12px;
			line-height: 1.5;
		}
		a {
			display:block;
			padding: 8px 15px;
			background-color: transparent;
			border: 2px solid #fff;
			color: #fff !important;
		}
		
	}
	li:nth-of-type(even){
			background-color: var(--tertiary);
	}
`;
export const MotionLi = styled(motion.li).attrs({
	initial: {
		opacity: 0,
		transform: 'translateX(5px)'
	}
})``;


export const DoctorTypesContainer = styled.section`
	width: 100%;
	padding:10px 5%;
	display:flex;
	justify-content:space-between;
	margin-bottom:50px;
`;

export const DoctorTypes = styled.ul`
	list-style:none;
	display:flex;
	flex:1;
	align-items:center;
	justify-content:space-between;
	
	li {
		display:flex;
		flex-direction:column;
		width: 32%;
		background-color: white;
		header {
			width: 100%;
			display:flex;
			flex-direction:column;
			position:relative;
			max-height:297px;
			margin-bottom:50px;
			img {
				width: 100%;
				height:100%;
			}
			span {
				height:100px;
				width: 100px;
				display:flex;
				color:white;
				justify-content:center;
				align-items:center;
				position:absolute;
				bottom:-50px;
				left: calc(50% - 50px);
				border:10px solid white;
				border-radius:50%;
				background-color: var(--secondary);
				overflow:hidden;

				&::after{
					transition: transform .1s ease-in-out;
					content: '';
					width: 90%;
					height: 90%;
					left: 5%;
					top: 5%;
					background-color: white;
					z-index:1;
					position:absolute;
					border-radius:50px;
					transform: scale(0);
				}
				&:hover::after{
					transform:scale(1);
				}

				svg {
					position:absolute;
					font-size:38px;
					z-index:5;
					animation-name: raise_from_top;
					animation-timing-function: ease-in-out;
					animation-duration: .3s;
					animation-fill-mode: forwards;
				}
				
				&:hover svg {
					animation-name: raise_from_bottom;
					animation-timing-function: ease-in-out;
					animation-duration: .3s;
					animation-fill-mode: forwards;
				}
			}
		}
		section {
			flex:1;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items:center;
			justify-content:space-between;
			padding: 15px;
			span, h1, p{
				margin-bottom:15px;
			}
			p {
				line-height: 1.15;
				text-align: justify;
				text-justify: inter-word;
			}
		}
	}
`;

export const WorkingHours = styled.ul`
	display:flex;
	flex-shrink:1;
	width: 25%;
	padding: 30px;
	margin-left: 30px;
	flex-direction: column;
	border: 1px solid rgba(0,0,0,.1);
	border-bottom: 2px solid rgba(0,0,0,.1);
	background-color: rgba(0,0,0,.07);

	header {
		display:flex;
		width:100%;
		flex-direction:column;
		align-items:center;
		margin-bottom: 15px;
		h2 {
			color:#222;
			margin-bottom:15px;
		}
		p { color: #444;}
	}
	li {
		display:flex;
		width: 100%;
		flex-direction:row;
		padding:8px 0;
		justify-content:space-evenly;
		span,
		b { 
			display:flex;
			align-items:center;
			justify-content:center;
			font-size:12px;
		}
		b {
			flex:1;
			justify-content:flex-start;
		}
		padding-bottom:8px;
		border-bottom:0.5px solid rgba(0,0,0,.13);
	}
`;

