import styled from "styled-components";



export const Container = styled.div`
	width:100vw;
	height:100vh;
	display:flex;
	overflow:hidden;
	flex-direction:row;
	padding:15px;
`;

export const SignupContainer = styled.aside`
	width: 650px;
	padding:2rem;
	display:flex;
	flex-direction: column;
	img {
		width:230px;
		margin-bottom:30px;
	}
	align-items:flex-start;
	justify-content:stretch;
	h1 {
		font-size: 38px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 37px;
		margin-bottom: 1.5rem;
		color: var(--primary);
	}
	span {
		color: #393939;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 24px;
		a {
			margin-left:15px;
			font-size:16px;
		}
		input[type^="checkbox"] {
			transform:scale(1.2);
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

	// #responsive
`;
export const BgContainer = styled.div`
	flex:1;
	display:flex;
	background-image: url('http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/devojcica-kod-zubara-1200x1200.jpg');
	background-color: red;
	border-radius:15px;
	background-size:cover;
	background-position:center;
	background-repeat:no-repeat;
`;

export const Group = styled.div`
	width: 100%;
	display:flex;

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
		margin:0 10px 10px 0;
		input,
		select {
			display:flex;
			width: 100%;
			height:30px;
			color: var(--secondary);
			font-size: 16px;
			border:0;
			background-color: transparent;
			padding:4px 4px 4px 0;
		}
	}

`;

