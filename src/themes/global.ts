import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing:border-box;
		outline:0;
		text-decoration:none;
		font-family: 'Montserrat', sans-serif;
	}
	body,
	html,
	#root {
		overflow-x:hidden;
		width: 100vw;
	}

	:root {
		// paleta de cores
		--primary: #205072;
		--secondary: #329D9C;
		--tertiary: #56c596;
		--quaternary: #7BE495;
		--quaternary-light: #CFF4D2;
	}


	.w50 {
		width:50%;
	}


	// animations

	@keyframes raise_from_bottom {
		0%   {
			opacity:0;
		}
		1% {
			transform: translateY(100px);
		}
		100% {
			transform: translateY(0);
			color:var(--secondary);
		}
	}
	@keyframes raise_from_top {
		0%   {
			opacity:0;
		}
		1% {
			transform: translateY(-100px);
		}
		100% {
			transform: translateY(0);
			color:white;
		}
	}

`;