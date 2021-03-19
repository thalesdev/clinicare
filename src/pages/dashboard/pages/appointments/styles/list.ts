import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	padding-top: 50px;
	display:flex;
	align-items:flex-start;
	justify-content:flex-start;
	width: 100%;
	min-height: 100%;

	header{
		width:100%;
		display:flex;
		justify-content:space-between;
	}

	section {
		padding: 30px;
		display: flex;
		width: 1000px;
		flex-direction: column;
		border-radius:5px;
		background-color: #FFFFFF;
		box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
	}
	label {
		margin: 10px 10px 10px 0;
		display: flex;
		align-items:center;
		justify-content: space-between;
		span {
			margin-right:10px;
		}
	}
`;
