import styled from 'styled-components';
import Background from '../../assets/img/bg-page.png';
export const Container = styled.div`
	display:flex;
	background-image: url(${Background});
	background-repeat: repeat;
`;

export const Page = styled.div`
	flex:1;
	display:flex;
	min-height: 100vh;
	flex-direction: column;
`;
