import { motion } from 'framer-motion';
import styled from 'styled-components';
interface ContainerProps {
	background?: string;
}
export const Container = styled.div<ContainerProps>`
	width: 100%;
	height: 600px;
	display:flex;
	align-items:center;
	justify-content:center;
	background-color:#fbfbfb;
	background-image: ${(props) => `url(${props.background})`};
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: scroll;
	box-sizing:border-box;
`;

export const AnimationContainer = styled(motion.div)`
	height:100%;
	width:100%;
`;
